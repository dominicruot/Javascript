const mongoose = require("mongoose")

const FeeModel = mongoose.model(
    'Fee',
    new mongoose.Schema({
        user: String,
        amount: String,
        datepaid: String,
        expiry: String,

    })

)

module.exports = FeeModel;