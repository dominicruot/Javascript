const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const MatchModel = mongoose.model(
    'Match',
    new mongoose.Schema({
        referee: Schema.ObjectId,
        home: String,
        away: String,
        avenue: String,
        kickstart: String,
        time: String,
    })

)

module.exports = MatchModel;