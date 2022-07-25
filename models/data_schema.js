const mongoose = require("mongoose");
var dataSchema = new mongoose.Schema(
    {
        _id:Date,
    list: [
        {
            category: String,
            item: String,
            qty: Number,
            price: Number
        }]
    });
   
    module.exports = mongoose.model("data",dataSchema);