const express = require('express');
const MatchModel = require('../models/matchModel');
const router = express.Router()

router.getMatches = async (req, res) => {
    const matches = await MatchModel.find({})
    res.status(200).json({
        matches: matches
    })
}


//Create a team
router.createMatch = async (req, res) => {
    const createMatch = await new MatchModel({
        referee: req.body.referee,
        home: req.body.home,
        away: req.body.away,
        avenue: req.body.avenue,
        kickstart: req.body.kickstart,
        time: req.body.time,
    });

    createMatch.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Some error occurred while creating the Location." });
        } else {
            res.status(200).json({ message: "Your team is created!." });
        }
    })
}

router.editMatch = function (req, res) {
    // Update a note identified by the noteId in the request
    MatchModel.findById(req.params.id, function (err, note) {
        if (err) {
            res.status(500).send({ message: "Could not find a note with id " + req.params.id });
        }

        note.referee = req.body.referee,
            note.home = req.body.home,
            note.away = req.body.away,
            note.avenue = req.body.avenue,
            note.kickstart = req.body, kickstart,
            note.time = req.body.time,

            note.save(function (err, data) {
                if (err) {
                    res.status(500).send({ message: "Could not update note with id " + req.params.noteId });
                } else {
                    res.send(data);
                }
            });
    });
}

router.deleteMatch = (req, res) => {
    MatchModel.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not Match  with id " + req.params.id });
        } else {
            res.send({ message: "Match deleted successfully!" })
        }
    });
}

module.exports = router