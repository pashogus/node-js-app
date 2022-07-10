const mongoose = require("mongoose");
var dataSchema = new mongoose.Schema(
    {
        date: String,
    list: [
        {
            category: String,
            item: String,
            qty: Number,
            price: Number
        }]
    });
   
    module.exports = mongoose.model("data",dataSchema);