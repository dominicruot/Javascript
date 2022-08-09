const express = require('express');
const LeagueModel = require('../models/leagueModel');
const router = express.Router()

router.getLeagues = async (req, res) => {
    const leagues = await LeagueModel.find({})
    res.status(200).json({
        leagues: leagues
    })
}


//Create a team
router.createLeague = async (req, res) => {
    const createdLeague = await new LeagueModel({
        team: req.body.team,
        win: req.body.win,
        lose: req.body.lose,
        draw: req.body.draw,
        point: req.body.point,
        reprimanded: req.body.reprimanded,
        discipline: req.body.discipline
    });

    createdLeague.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Some error occurred while creating the Location." });
        } else {
            res.status(200).json({ message: "Your team is created!." });
        }
    })
}

router.editLeague = function (req, res) {
    // Update a note identified by the noteId in the request
    LeagueModel.findById(req.params.id, function (err, note) {
        if (err) {
            res.status(500).send({ message: "Could not find a note with id " + req.params.id });
        }

        note.team = req.body.team,
            note.win = req.body.win,
            note.lose = req.body.lose,
            note.draw = req.body.draw,
            note.point = req.body.point,
            note.reprimanded = req.body.reprimanded,
            note.discipline = req.body.discipline

        note.save(function (err, data) {
            if (err) {
                res.status(500).send({ message: "Could not update note with id " + req.params.noteId });
            } else {
                res.send(data);
            }
        });
    });
}

router.deleteLeague = (req, res) => {
    LeagueModel.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not delete team with id " + req.params.id });
        } else {
            res.send({ message: "League deleted successfully!" })
        }
    });
}

module.exports = router