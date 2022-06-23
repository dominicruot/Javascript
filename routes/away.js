var express = require('express');
const { create } = require('hbs');
const { getAways, createAway, editAway, deleteAway } = require('../controllers/awayController');
var router = express.Router();
const { loginHandle } = require('../controllers/userController')

/* GET users listing. */
router.get('/', loginHandle, getAways);
/* CREATE team. */
router.post('/create', loginHandle, createAway);
/* EDIT Team */
router.put('/edit/:id', loginHandle, editAway)
/* DELETE Team. */
router.delete('/delete/:id', loginHandle, deleteAway);

module.exports = router;
