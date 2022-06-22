const mongoose = require("mongoose")

const HomeModel = mongoose.model(
    'Home',
    new mongoose.Schema({
        team: String,
        name: String,
        score: String,
    })

)

module.exports = HomeModel;