const teamModel = require('../models/teamModel')
const express = require('express');
const router = express.Router()

router.getTeams = async (req, res) => {
    const teams = await teamModel.find({})
    res.status(200).json({
        teams: teams
    })
}


//Create a team
router.createTeam = async (req, res) => {
    const createdTeam = await new teamModel({
        user: req.body.user,
        name: req.body.name,
        points: req.body.points,
    });

    createdTeam.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Some error occurred while creating the Location." });
        } else {
            res.status(200).json({ message: "Your team is created!." });
        }
    })
}

router.editTeam = function (req, res) {
    // Update a note identified by the noteId in the request
    teamModel.findById(req.params.id, function (err, note) {
        if (err) {
            res.status(500).send({ message: "Could not find a note with id " + req.params.id });
        }

        note.name = req.body.name;
        note.points = req.body.points;

        note.save(function (err, data) {
            if (err) {
                res.status(500).send({ message: "Could not update note with id " + req.params.noteId });
            } else {
                res.send(data);
            }
        });
    });
}

router.deleteTeam = (req, res) => {
    teamModel.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not delete team with id " + req.params.id });
        } else {
            res.send({ message: "Team deleted successfully!" })
        }
    });
}

module.exports = router