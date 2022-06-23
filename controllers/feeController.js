const express = require('express');
const FeeModel = require('../models/feeModel');
const router = express.Router()

router.getFees = async (req, res) => {
    const fees = await FeeModel.find({})
    res.status(200).json({
        fees: fees
    })
}


//Create a team
router.createFee = async (req, res) => {
    const createFe = await new FeeModel({
        user: req.body.user,
        amount: req.body.amount,
        datepaid: req.body.datepaid,
        expiry: req.body.expiry,
    });

    createFee.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Some error occurred while creating the Location." });
        } else {
            res.status(200).json({ message: "Your team is created!." });
        }
    })
}

router.editFee = function (req, res) {
    // Update a note identified by the noteId in the request
    FeeModel.findById(req.params.id, function (err, note) {
        if (err) {
            res.status(500).send({ message: "Could not find a note with id " + req.params.id });
        }

        note.user = req.body.user,
            note.amount = req.body.amount,
            note.datepaid = req.body.datepaid,
            note.expiry = req.body.expiry,

            note.save(function (err, data) {
                if (err) {
                    res.status(500).send({ message: "Could not update note with id " + req.params.noteId });
                } else {
                    res.send(data);
                }
            });
    });
}

router.deleteFee = (req, res) => {
    FeeModel.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not delete team with id " + req.params.id });
        } else {
            res.send({ message: "Team deleted successfully!" })
        }
    });
}

module.exports = router