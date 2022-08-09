const express = require('express');
const AwayModel = require('../models/awayModel');
const router = express.Router()

router.getAways = async (req, res) => {
    const aways = await AwayModel.find({})
    res.status(200).json({
        aways: aways
    })
}


//Create a team
router.createAway = async (req, res) => {
    const createdAway = await new AwayModel({
        team: req.body.team,
        name: req.body.name,
        score: req.body.score,
    });

    createdAway.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Some error occurred while creating the Location." });
        } else {
            res.status(200).json({ message: "Your team is created!." });
        }
    })
}

router.editAway = function (req, res) {
    // Update a note identified by the noteId in the request
    AwayModel.findById(req.params.id, function (err, note) {
        if (err) {
            res.status(500).send({ message: "Could not find a note with id " + req.params.id });
        }
        note.team = req.body.team,
            note.name = req.body.name,
            note.score = req.body.score,

            note.save(function (err, data) {
                if (err) {
                    res.status(500).send({ message: "Could not update note with id " + req.params.noteId });
                } else {
                    res.send(data);
                }
            });
    });
}

router.deleteAway = (req, res) => {
    AwayModel.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not delete team with id " + req.params.id });
        } else {
            res.send({ message: "Team deleted successfully!" })
        }
    });
}

module.exports = router