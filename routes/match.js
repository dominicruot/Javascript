var express = require('express');
const { create } = require('hbs');
const { getMatches, createMatch, editMatch, deleteMatch } = require('../controllers/matchController');
var router = express.Router();

/* GET users listing. */
router.get('/', getMatches);
/* CREATE team. */
router.post('/create', createMatch);
/* EDIT Team */
router.put('/edit/:id', editMatch)
/* DELETE Team. */
router.delete('/delete/:id', deleteMatch);

module.exports = router;
