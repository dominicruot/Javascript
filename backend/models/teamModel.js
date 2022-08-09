const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const teamModel = mongoose.model(
    'Team',
    new mongoose.Schema({
        user: Schema.ObjectId,
        name: String,
        points: Number,

    })

)

module.exports = teamModel;