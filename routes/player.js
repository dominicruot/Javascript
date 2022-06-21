var express = require('express');
const { deleteTeam } = require('../controllers/teamController');
var router = express.Router();
const createTeam = require('../controllers/teamController');
const getTeams = require('../controllers/teamController');

/* GET users listing. */
router.get('/', getTeams);
router.post('/create', createTeam);
router.get('/edit', getTeams);
router.delete('/delete:id', deleteTeam);

module.exports = router;
