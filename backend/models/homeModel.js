const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const HomeModel = mongoose.model(
    'Home',
    new mongoose.Schema({
        team: Schema.ObjectId,
        name: String,
        score: String,
    })

)

module.exports = HomeModel;