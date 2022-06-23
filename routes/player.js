var express = require('express');
const { create } = require('hbs');
const { getPlayers, createPlayer, editPlayer, deletePlayer } = require('../controllers/playerController');
const { loginHandle } = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', loginHandle, getPlayers);
/* CREATE team. */
router.post('/create', loginHandle, createPlayer);
/* EDIT Team */
router.put('/edit/:id', loginHandle, editPlayer)
/* DELETE Team. */
router.delete('/delete/:id', loginHandle, deletePlayer);

module.exports = router;
