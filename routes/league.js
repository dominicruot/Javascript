var express = require('express');
const { create } = require('hbs');
const { getLeagues, createLeague, editLeague, deleteLeague } = require('../controllers/leagueController');
var router = express.Router();
const { loginHandle } = require('../controllers/userController')

/* GET users listing. */
router.get('/', loginHandle, getLeagues);
/* CREATE team. */
router.post('/create', loginHandle, createLeague);
/* EDIT Team */
router.put('/edit/:id', loginHandle, editLeague)
/* DELETE Team. */
router.delete('/delete/:id', loginHandle, deleteLeague);

module.exports = router;
