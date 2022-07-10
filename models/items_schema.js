const mongoose = require("mongoose");
var itemsSchema = new mongoose.Schema(
    {
act_date:{type:String},
groceries : [{
    item : String,
    rate : Number
     }],
     fruits : [{
        item : String,
        rate : Number
         }],
         vegetables : [{
            item : String,
            rate : Number
             }],
             others : [{
                item : String,
                rate : Number
                 }]
    }
);

module.exports = mongoose.model("item",itemsSchema);