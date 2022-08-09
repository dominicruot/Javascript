var express = require('express');
const { create } = require('hbs');
const { getCoaches, createCoaches, editCoach, deleteCoach } = require('../controllers/coachController');

var router = express.Router();

/* GET users listing. */
router.get('/', getCoaches);
/* CREATE team. */
router.post('/create', createCoaches);
/* EDIT Team */
router.put('/edit/:id', editCoach)
/* DELETE Team. */
router.delete('/delete/:id', deleteCoach);

module.exports = router;
