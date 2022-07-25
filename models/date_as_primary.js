const mongoose = require("mongoose");
var dataPrimarySchema = new mongoose.Schema(
    {
        _id: Date,
    list: [
        {
            category: String,
            item: String,
            qty: Number,
            price: Number
        }]
    });
   
    module.exports = mongoose.model("dataPrimary",dataPrimarySchema);