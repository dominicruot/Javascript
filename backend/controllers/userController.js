const express = require('express');
const router = express.Router()
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

//Load Input Validation
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/key");
const passport = require("passport");
const isEmpty = require('is-empty');
const validator = require('validator');

var Users = require("../models/userModel");

router.GetUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

router.Signup = async (req, res) => {
    const { name, email, password, password2 } = req.body;

    // Validate user input
    if (!name && email && password && password2) {
        res.status(400).send("All input is required");
    }
    // check if user already exist
    // Validate if user exist in our databas
    const oldUser = await Users.findOne({ email });
    if (oldUser) {
        return res.status(400).json({ msg: "User Already Exist. Please Login" });
    }

    if (password !== password2) return res.status(400).json({ msg: "Password and Confirm Password do not match" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {

        await Users.create({
            name: name,
            email: email,
            password: hashPassword
        });
        return res.status(200).json({ msg: "Registration Successful" });
    } catch (error) {

        console.log(error);
    }
}


router.Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({ msg: "Wrong Password" });
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;

        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({ msg: "Email not found" });
    }
}

router.Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}


module.exports = router

// Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// Load User model
// const User = require('../models/userModel')

// router.GetUsers = async (req, res) => {
//     const users = await User.find({})
//     res.status(200).json({
//         users: users
//     })
// }
// // @route POST api/users/register
// // @desc Register user
// // @access Public
// router.SignUp = (req, res) => {
//     // Form validation
//     function validateRegisterInput(data) {
//         let errors = {};
//         //Convert empty fields to an empty string so we can use validator functions
//         data.name = !isEmpty(data.name) ? data.name : "";
//         data.email = !isEmpty(data.email) ? data.email : "";
//         data.password = !isEmpty(data.password) ? data.password : "";
//         data.password2 = !isEmpty(data.password2) ? data.password2 : "";

//         //name Checks
//         if (validator.isEmpty(data.name)) {
//             errors.name = "Name field is required";
//         }

//         //Email Checks
//         if (validator.isEmpty(data.email)) {
//             errors.email = "Email field is required";
//         } else if (!validator.isEmail(data.email)) {
//             errors.email = "Email is Invalid";
//         }

//         //Password Checks
//         if (validator.isEmpty(data.password)) {
//             errors.password = "Password field is required";
//         }
//         // Password length checks
//         else if (!validator.isLength(data.password, {
//             min: 6,
//             max: 30
//         })) {
//             errors.password = "Password must be at least 6 characters";
//         }

//         // Password2 checks
//         else if (validator.isEmpty(data.password2)) {
//             errors.password2 = "Confirm Password field is required";
//         }

//         // Password and password2 compares
//         else if (!validator.equals(data.password, data.password2)) {
//             errors.password2 = "Passwords do not match";
//         }

//         return {
//             errors,
//             isValid: isEmpty(errors)
//         };
//     }
//     const { errors, isValid } = validateRegisterInput(req.body);

//     // Check validation
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     User.findOne({ email: req.body.email }).then(user => {
//         if (user) {
//             return res.status(400).json({ email: "Email already exists" });
//         } else {
//             const newUser = new User({
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: req.body.password
//             });

//             // Hash password before saving in database
//             bcrypt.genSalt(10, (err, salt) => {
//                 bcrypt.hash(newUser.password, salt, (err, hash) => {
//                     if (err) throw err;
//                     newUser.password = hash;
//                     newUser
//                         .save()
//                         .then(user => res.json(user))
//                         .catch(err => console.log(err));
//                 });
//             });
//         }
//     });
// }

// // @route POST api/users/login
// // @desc Login user and return JWT token
// // @access Public
// router.Login = (req, res) => {
//     // Form validation
//     //Login Validator
//     function validateLoginInput(data) {
//         let errors = {};

//         // Convert empty fields to an empty string so we can use validator functions
//         data.email = !isEmpty(data.email) ? data.email : "";
//         data.password = !isEmpty(data.password) ? data.password : "";

//         //Email Checks
//         if (validator.isEmpty(data.email)) {
//             errors.email = "Email field is required";
//         } else if (!validator.isEmail(data.email)) {
//             errors.email = "Email is Invalid";
//         }

//         //Password Checks
//         if (validator.isEmpty(data.password)) {
//             errors.password = "Password field is required";
//         }
//         return {
//             errors,
//             isValid: isEmpty(errors)
//         };
//     }
//     const { errors, isValid } = validateLoginInput(req.body);

//     // Check validation
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }

//     const email = req.body.email;
//     const password = req.body.password;

//     // Find user by email
//     User.findOne({ email }).then(user => {
//         // Check if user exists
//         if (!user) {
//             return res.status(404).json({ emailnotfound: "Email not found" });
//         }

//         // Check password
//         bcrypt.compare(password, user.password).then(isMatch => {
//             if (isMatch) {
//                 // User matched
//                 // Create JWT Payload
//                 const payload = {
//                     id: user.id,
//                     name: user.name
//                 };

//                 // Sign token
//                 jwt.sign(
//                     payload,
//                     keys.secretOrKey,
//                     {
//                         expiresIn: 31556926 // 1 year in seconds
//                     },
//                     (err, token) => {
//                         res.json({
//                             success: true,
//                             token: "Bearer " + token
//                         });
//                     }
//                 );
//             } else {
//                 return res
//                     .status(400)
//                     .json({ passwordincorrect: "Password incorrect" });
//             }
//         });
//     });
// }