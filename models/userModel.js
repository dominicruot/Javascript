const mongoose = require('mongoose');

//------------ User Schema ------------//
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    resetLink: {
        type: String,
        default: ''
    },
    paid: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;