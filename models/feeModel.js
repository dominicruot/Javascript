const mongoose = require("mongoose")

const FeeModel = mongoose.model(
    'FeeModel',
    new mongoose.Schema({
        user: String,
        amount: String,
        datepaid: String,
        expiry: String,
        createAt: String,

    })

)

module.exports = FeeModel;