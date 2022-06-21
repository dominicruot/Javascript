const mongoose = require("mongoose")

const PlayerModel = mongoose.model(
    'Player',
    new mongoose.Schema({
        user: String,
        name: String,
        age: String,
        class: String,
        roles: String,
        cards: String,
        score: String,

    })

)

module.exports = PlayerModel;