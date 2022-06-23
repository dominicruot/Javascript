const mongoose = require("mongoose")

const PlayerModel = mongoose.model(
    'Player',
    new mongoose.Schema({
        team: String,
        name: String,
        age: Number,
        class: Number,
        roles: String,
        cards: {
            type: String,
            enum: ['yellow', 'red', 'none'],
            default: 'none'
        },
        score: {
            type: Number,
            default: 0
        },
        penalty: {
            type: Number,
            default: 0
        }

    })

)

module.exports = PlayerModel;