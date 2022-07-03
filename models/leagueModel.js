const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const LeagueModel = mongoose.model(
    'League',
    new mongoose.Schema({
        team: Schema.ObjectId,
        win: String,
        lose: String,
        draw: String,
        point: String,
        reprimanded: String,
        discipline: String,


    })

)

module.exports = LeagueModel;