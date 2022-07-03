const express = require('express');
const router = express.Router()

//Load Input Validation
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/key");
const passport = require("passport");
const isEmpty = require('is-empty');
const validator = require('validator');
// Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// Load User model
const User = require('../models/userModel')

// @route POST api/users/register
// @desc Register user
// @access Public
router.SignUp = (req, res) => {
    // Form validation
    function validateRegisterInput(data) {
        let errors = {};
        //Convert empty fields to an empty string so we can use validator functions
        data.name = !isEmpty(data.name) ? data.name : "";
        data.email = !isEmpty(data.email) ? data.email : "";
        data.password = !isEmpty(data.password) ? data.password : "";
        data.password2 = !isEmpty(data.password2) ? data.password2 : "";

        //name Checks
        if (validator.isEmpty(data.name)) {
            errors.name = "Name field is required";
        }

        //Email Checks
        if (validator.isEmpty(data.email)) {
            errors.email = "Email field is required";
        } else if (!validator.isEmail(data.email)) {
            errors.email = "Email is Invalid";
        }

        //Password Checks
        if (validator.isEmpty(data.password)) {
            errors.password = "Password field is required";
        }
        // Password length checks
        else if (!validator.isLength(data.password, {
            min: 6,
            max: 30
        })) {
            errors.password = "Password must be at least 6 characters";
        }

        // Password2 checks
        else if (validator.isEmpty(data.password2)) {
            errors.password2 = "Confirm Password field is required";
        }

        // Password and password2 compares
        else if (!validator.equals(data.password, data.password2)) {
            errors.password2 = "Passwords do not match";
        }

        return {
            errors,
            isValid: isEmpty(errors)
        };
    }
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
}

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.Login = (req, res) => {
    // Form validation
    //Login Validator
    function validateLoginInput(data) {
        let errors = {};

        // Convert empty fields to an empty string so we can use validator functions
        data.email = !isEmpty(data.email) ? data.email : "";
        data.password = !isEmpty(data.password) ? data.password : "";

        //Email Checks
        if (validator.isEmpty(data.email)) {
            errors.email = "Email field is required";
        } else if (!validator.isEmail(data.email)) {
            errors.email = "Email is Invalid";
        }

        //Password Checks
        if (validator.isEmpty(data.password)) {
            errors.password = "Password field is required";
        }
        return {
            errors,
            isValid: isEmpty(errors)
        };
    }
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };

                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
}


module.exports = router