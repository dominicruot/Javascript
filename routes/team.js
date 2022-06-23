var express = require('express');
const { create } = require('hbs');
const { getTeams, createTeam, editTeam, deleteTeam } = require('../controllers/teamController');
const { loginHandle } = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', loginHandle, getTeams);
/* CREATE team. */
router.post('/create', loginHandle, createTeam);
/* EDIT Team */
router.put('/edit/:id', loginHandle, editTeam)
/* DELETE Team. */
router.delete('/delete/:id', loginHandle, deleteTeam);

module.exports = router;
