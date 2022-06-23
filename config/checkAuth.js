const express = require('express');
const router = express.Router()
//------------ Routing via Auth ------------//
router.ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'Please log in first!');
    res.redirect('/auth/login');
}

router.forwardAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/dashboard');
}

module.exports = router;
