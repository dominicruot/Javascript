const mongoose = require("mongoose")

const HomeModel = mongoose.model(
    'HomeModel',
    new mongoose.Schema({
        team: String,
        name: String,
        score: String,
    })

)

module.exports = HomeModel;