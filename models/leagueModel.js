const mongoose = require("mongoose")

const LeagueModel = mongoose.model(
    'League',
    new mongoose.Schema({
        team: String,
        win: String,
        lose: String,
        draw: String,
        point: String,
        reprimanded: String,
        discipline: String,


    })

)

module.exports = LeagueModel;