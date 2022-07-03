var express = require('express');
const { create } = require('hbs');
const { getFees, createFee, editFee, deleteFee } = require('../controllers/feeController');
var router = express.Router();

/* GET users listing. */
router.get('/', getFees);
/* CREATE team. */
router.post('/create', createFee);
/* EDIT Team */
router.put('/edit/:id', editFee)
/* DELETE Team. */
router.delete('/delete/:id', deleteFee);

module.exports = router;
