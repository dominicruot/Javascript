const express = require('express');
const PlayerModel = require('../models/playerModel');
const router = express.Router()

router.getPlayers = async (req, res) => {
    const players = await PlayerModel.find({})
    res.status(200).json({
        players: players
    })
}


//Create a team
router.createPlayer = async (req, res) => {
    const createdPlayer = await new PlayerModel({
        team: req.body.team,
        name: req.body.name,
        age: req.body.age,
        class: req.body.class,
        roles: req.body.roles,
        cards: req.body.cards,
        score: req.body.score,
    });

    createdPlayer.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Some error occurred while creating the player." });
        } else {
            res.status(200).json({ message: "Your player is created!." });
        }
    })
}

router.editPlayer = function (req, res) {
    // Update a note identified by the noteId in the request
    PlayerModel.findById(req.params.id, function (err, note) {
        if (err) {
            res.status(500).send({ message: "Could not find a player with id " + req.params.id });
        }
        note.name = req.body.name,
            note.age = req.body.age,
            note.class = req.body.class,
            note.roles = req.body.roles,
            note.cards = req.body.cards,
            note.score = req.body.score,
            note.penalty = req.body.penalty,

            note.save(function (err, data) {
                if (err) {
                    res.status(500).send({ message: "Could not update note with id " + req.params.noteId });
                } else {
                    res.send(data);
                }
            });
    });
}

router.deletePlayer = (req, res) => {
    PlayerModel.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not player team with id " + req.params.id });
        } else {
            res.send({ message: "Player deleted successfully!" })
        }
    });
}

module.exports = router