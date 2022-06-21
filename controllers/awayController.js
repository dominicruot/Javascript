
const teamModel = require('../models/teamModel')
var express = require('express');
const router = express.Router()

router.getTeams = async (req, res) => {
    res.status(200).json({
        message: "Serving Users on the Endpoint."
    });
}

//Create a team
router.createTeam = async (req, res) => {
    res.status(200).json({
        message: "Serving Users on the Endpoint."
    });
}
router.editTeam = async (res, req) => {
    res.status(200).json({
        message: "Serving Users on the Endpoint."
    });
}
router.deleteTeam = async (res, req) => {
    res.status(200).json({
        message: "Serving Users on the Endpoint."
    });
}

module.exports = router