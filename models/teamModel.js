const mongoose = require("mongoose")

const teamModel = mongoose.model(
    'Team',
    new mongoose.Schema({
        user: String,
        name: String,
        points: Number,

    })

)

module.exports = teamModel;