const teamModel = require('../models/teamModel')
const express = require('express');
const HomeModel = require('../models/homeModel');
const router = express.Router()

router.getHomes = async (req, res) => {
    const homes = await HomeModel.find({})
    res.status(200).json({
        homes: homes
    })
}


//Create a team
router.createHome = async (req, res) => {
    const createdHome = await new HomeModel({
        team: req.body.team,
        name: req.body.name,
        score: req.body.score,
    });

    createdHome.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Some error occurred while creating the Location." });
        } else {
            res.status(200).json({ message: "Your team is created!." });
        }
    })
}

router.editHome = function (req, res) {
    // Update a note identified by the noteId in the request
    HomeModel.findById(req.params.id, function (err, note) {
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

router.deleteHome = (req, res) => {
    HomeModel.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not delete team with id " + req.params.id });
        } else {
            res.send({ message: "Team deleted successfully!" })
        }
    });
}

module.exports = router