const express = require('express');
const { SignUp, Login, GetUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/', GetUsers),
    router.post('/login', Login),
    router.post('/signup', SignUp)

module.exports = router;