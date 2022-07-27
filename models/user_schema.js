const mongoose = require("mongoose");
var userSchema = new mongoose.Schema(
    {
        userName:String,
        firstName:String,
        lastName:String,
        phoneNumber:String,
        password:String
    });
   
    module.exports = mongoose.model("userSchema",userSchema);