var express = require('express');
const { create } = require('hbs');
const { getMatches, createMatch, editMatch, deleteMatch } = require('../controllers/matchController');
var router = express.Router();
const { loginHandle } = require('../controllers/userController')

/* GET users listing. */
router.get('/', loginHandle, getMatches);
/* CREATE team. */
router.post('/create', loginHandle, createMatch);
/* EDIT Team */
router.put('/edit/:id', loginHandle, editMatch)
/* DELETE Team. */
router.delete('/delete/:id', loginHandle, deleteMatch);

module.exports = router;
