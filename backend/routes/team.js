var express = require('express');
const { create } = require('hbs');
const { getTeamsId, getTeams, createTeam, editTeam, deleteTeam } = require('../controllers/teamController');
const CheckAuth = require('../controllers/checkAuthController')
var router = express.Router();

/* GET users listing. */
router.get('/', getTeams, CheckAuth);
router.get('/:id', getTeamsId);
/* CREATE team. */
router.post('/create', createTeam);
/* EDIT Team */
router.put('/edit/:id', editTeam)
/* DELETE Team. */
router.delete('/delete/:id', deleteTeam);

module.exports = router;
