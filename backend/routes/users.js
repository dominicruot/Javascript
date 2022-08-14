const express = require('express');
const { Signup, Login, GetUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/', GetUsers),
    router.post('/login', Login),
    router.post('/signup', Signup)

module.exports = router;