const mongoose = require("mongoose")

const MatchModel = mongoose.model(
    'Match',
    new mongoose.Schema({
        referee: String,
        home: String,
        away: String,
        avenue: String,
        kickstart: String,
        time: String,
    })

)

module.exports = MatchModel;