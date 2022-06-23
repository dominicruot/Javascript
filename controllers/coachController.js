const express = require('express');
const router = express.Router()
const CoachModel = require('../models/coachModel')

router.getCoaches = async (req, res) => {
    const coaches = await CoachModel.find({})
    res.status(200).json({
        coaches: coaches
    })
}


//Create a team
router.createCoaches = async (req, res) => {
    const createdCoaches = await new CoachModel({
        user: req.body.user,
        name: req.body.name,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        role: req.body.role,
    });

    createdCoaches.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Some error occurred while creating the Location." });
        } else {
            res.status(200).json({ message: "Your team is created!." });
        }
    })
}

router.editCoach = function (req, res) {
    // Update a note identified by the noteId in the request
    CoachModel.findById(req.params.id, function (err, note) {
        if (err) {
            res.status(500).send({ message: "Could not find a note with id " + req.params.id });
        }

        note.user = req.body.user,
            note.name = req.body.name,
            note.password = req.body.password,
            note.passwordConfirm = req.body.passwordConfirm,
            note.role = req.body.role,

            note.save(function (err, data) {
                if (err) {
                    res.status(500).send({ message: "Could not update note with id " + req.params.noteId });
                } else {
                    res.send(data);
                }
            });
    });
}

router.deleteCoach = (req, res) => {
    CoachModel.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not delete team with id " + req.params.id });
        } else {
            res.send({ message: "Team deleted successfully!" })
        }
    });
}

module.exports = router