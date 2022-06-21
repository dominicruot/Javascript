var express = require('express');
const { create } = require('hbs');
const { getTeams, createTeam, editTeam, deleteTeam } = require('../controllers/teamController');
var router = express.Router();

/* GET users listing. */
router.get('/', getTeams);
/* CREATE team. */
router.post('/create', createTeam);
/* EDIT Team */
router.put('/edit/:id', editTeam)
/* DELETE Team. */
router.delete('/delete/:id', deleteTeam);

module.exports = router;
