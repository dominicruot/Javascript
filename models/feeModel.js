const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const FeeModel = mongoose.model(
    'Fee',
    new mongoose.Schema({
        user: Schema.ObjectId,
        amount: String,
        datepaid: String,
        expiry: String,

    })

)

module.exports = FeeModel;