var express = require('express');
const { create } = require('hbs');
const { getLeagues, createLeague, editLeague, deleteLeague } = require('../controllers/leagueController');
var router = express.Router();

/* GET users listing. */
router.get('/', getLeagues);
/* CREATE team. */
router.post('/create', createLeague);
/* EDIT Team */
router.put('/edit/:id', editLeague)
/* DELETE Team. */
router.delete('/delete/:id', deleteLeague);

module.exports = router;
