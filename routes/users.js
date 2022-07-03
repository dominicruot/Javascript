const express = require('express');
const { SignUp, Login } = require('../controllers/userController');
const router = express.Router();

router.use('/login', Login),
router.use('/register', SignUp)

module.exports = router;