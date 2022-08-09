const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const AwayModel = mongoose.model(
    'Away',
    new mongoose.Schema({
        team: Schema.ObjectId,
        name: String,
        score: String,
    })

)

module.exports = AwayModel;