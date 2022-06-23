var express = require('express');
const { create } = require('hbs');
const { getTeams, createTeam, editTeam, deleteTeam } = require('../controllers/teamController');
const { ensureAuthenticated } = require('../config/checkAuth')
var router = express.Router();

/* GET users listing. */
router.get('/', ensureAuthenticated, getTeams);
/* CREATE team. */
router.post('/create', ensureAuthenticated, createTeam);
/* EDIT Team */
router.put('/edit/:id', ensureAuthenticated, editTeam)
/* DELETE Team. */
router.delete('/delete/:id', ensureAuthenticated, deleteTeam);

module.exports = router;
