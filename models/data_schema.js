const mongoose = require("mongoose");
var dataSchema = new mongoose.Schema(
    {
        _id:Date,
    list: [
        {
            category: String,
            item: String,
            qty: Number,
            price: Number,
            user:String,
            payment:String,
            notes:String
        }]
    });
   
    module.exports = mongoose.model("data",dataSchema);