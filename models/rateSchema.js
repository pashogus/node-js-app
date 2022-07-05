
const mongoose = require("mongoose");
var rateSchema = new mongoose.Schema(
    {
item:{type:String},
rate:{type:Number},
    }
);

module.exports = mongoose.model("rate",rateSchema);
