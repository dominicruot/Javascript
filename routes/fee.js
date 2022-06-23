var express = require('express');
const { create } = require('hbs');
const { getFees, createFee, editFee, deleteFee } = require('../controllers/feeController');
const { getTeams, createTeam, editTeam, deleteTeam } = require('../controllers/teamController');
const { loginHandle } = require('../controllers/userController')
var router = express.Router();

/* GET users listing. */
router.get('/', loginHandle, getFees);
/* CREATE team. */
router.post('/create', loginHandle, createFee);
/* EDIT Team */
router.put('/edit/:id', loginHandle, editFee)
/* DELETE Team. */
router.delete('/delete/:id', loginHandle, deleteFee);

module.exports = router;
