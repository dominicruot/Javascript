const mongoose = require("mongoose")

const AwayModel = mongoose.model(
    'Away',
    new mongoose.Schema({
        team: String,
        name: String,
        score: String,
    })

)

module.exports = AwayModel;