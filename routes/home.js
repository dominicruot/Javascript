var express = require('express');
const { create } = require('hbs');
const { getHomes, createHome, editHome, deleteHome } = require('../controllers/homeController');
var router = express.Router();

/* GET users listing. */
router.get('/', getHomes);
/* CREATE team. */
router.post('/create', createHome);
/* EDIT Team */
router.put('/edit/:id', editHome)
/* DELETE Team. */
router.delete('/delete/:id', deleteHome);

module.exports = router;
