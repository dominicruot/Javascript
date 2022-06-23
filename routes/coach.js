var express = require('express');
const { create } = require('hbs');
const { getCoaches, createCoaches, editCoach, deleteCoach } = require('../controllers/coachController');
const { loginHandle } = require('../controllers/userController')

var router = express.Router();

/* GET users listing. */
router.get('/', loginHandle, getCoaches);
/* CREATE team. */
router.post('/create', loginHandle, createCoaches);
/* EDIT Team */
router.put('/edit/:id', loginHandle, editCoach)
/* DELETE Team. */
router.delete('/delete/:id', loginHandle, deleteCoach);

module.exports = router;
