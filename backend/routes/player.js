var express = require('express');
const { create } = require('hbs');
const { getPlayers, createPlayer, editPlayer, deletePlayer } = require('../controllers/playerController');
var router = express.Router();

/* GET users listing. */
router.get('/', getPlayers);
/* CREATE team. */
router.post('/create', createPlayer);
/* EDIT Team */
router.put('/edit/:id', editPlayer)
/* DELETE Team. */
router.delete('/delete/:id', deletePlayer);

module.exports = router;
