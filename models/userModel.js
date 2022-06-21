const mongoose = require("mongoose")

const UserModel = mongoose.model(
    'User',
    new mongoose.Schema({
        name: String,
        email: String,
        photo: String,
        password: String,
        PasswordConfirm: String,
        roles: String,

    })

)

module.exports = UserModel;