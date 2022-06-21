const mongoose = require("mongoose")

const CoachModel = mongoose.model(
    'Coach',
    new mongoose.Schema({
        user: String,
        name: String,
        password: String,
        passwordConfirm: String,
        role: String,

    })

)

module.exports = CoachModel;