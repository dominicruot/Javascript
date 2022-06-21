const mongoose = require("mongoose")

const AwayModel = mongoose.model(
    'AwayModel',
    new mongoose.Schema({
        team: String,
        name: String,
        score: String,
    })

)

module.exports = AwayModel;