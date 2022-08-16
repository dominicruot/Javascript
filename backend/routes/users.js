const express = require('express');
const { Signup, Login, GetUsers, Logout } = require('../controllers/userController');
const router = express.Router();

router.get('/', GetUsers),
    router.post('/login', Login),
    router.post('/signup', Signup)
router.post('/logout', Logout)


module.exports = router;