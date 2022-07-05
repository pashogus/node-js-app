const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var rateModel = require('../models/rateSchema.js');



router.get("/v1",(req,res)=>
{
   res.json("sample test");
});

router.get("/v1/getall",(req,res)=>
{
    res.json(rateModel.find());
});

router.post("/v1",(req,res)=>
{
    console.log(req);
    var rateObject = new rateModel();
    rateObject.item=req.body.item;
    rateObject.rate=req.body.rate;
    rateObject.save(rateObject)
    .then(data=>
    {
res.send(data);
    })

});


module.exports=router;