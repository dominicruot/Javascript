var express = require('express');
const { create } = require('hbs');
const { getHomes, createHome, editHome, deleteHome } = require('../controllers/homeController');
var router = express.Router();
const { loginHandle } = require('../controllers/userController')

/* GET users listing. */
router.get('/', loginHandle, getHomes);
/* CREATE team. */
router.post('/create', loginHandle, createHome);
/* EDIT Team */
router.put('/edit/:id', loginHandle, editHome)
/* DELETE Team. */
router.delete('/delete/:id', loginHandle, deleteHome);

module.exports = router;
