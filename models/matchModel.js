const mongoose = require("mongoose")

const MatchModel = mongoose.model(
    'MatchModel',
    new mongoose.Schema({
        referee: String,
        home: String,
        away: String,
        avenue: String,
        kickstart: String,
    })

)

module.exports = MatchModel;