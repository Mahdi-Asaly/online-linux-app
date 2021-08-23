const mongoose = require("mongoose");

const records = mongoose.Schema({
    item: String,
    soldAmount: Number,
    date: String,
});

const Records = mongoose.model('records', records);

module.exports = Records;
