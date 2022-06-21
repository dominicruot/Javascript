const mongoose = require("mongoose")

const UserModel = mongoose.model(
    'User',
    new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Please tell us your name!']
        },
        email: String,
        photo: String,
        password: String,
        PasswordConfirm: String,
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        paid: {
            type: Boolean,
            default: false
        }

    })

)

module.exports = UserModel;