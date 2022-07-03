var express = require('express');
const { create } = require('hbs');
const { getAways, createAway, editAway, deleteAway } = require('../controllers/awayController');
var router = express.Router();

/* GET users listing. */
router.get('/', getAways);
/* CREATE team. */
router.post('/create', createAway);
/* EDIT Team */
router.put('/edit/:id', editAway)
/* DELETE Team. */
router.delete('/delete/:id', deleteAway);

module.exports = router;
