const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const CoachModel = mongoose.model(
    'Coach',
    new mongoose.Schema({
        user: Schema.ObjectId,
        name: String,
        password: String,
        passwordConfirm: String,
        role: String,

    })

)

module.exports = CoachModel;