var express = require('express');
var router = express.Router();
const createTeam = require('../controllers/teamController');
const getTeams = require('../controllers/teamController');

/* GET users listing. */
router.get('/', getTeams);
router.post('/create', createTeam);
router.get('/edit/:id', getTeams);
router.delete('/delete/:id', createTeam);

module.exports = router;
