const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var dataModel = require('../models/data_schema');

router.get("/v1",(req,res)=>
{
   res.json("sample test");
});

router.post("/v1",(req,res)=>
{
   let data = new dataModel();
   data.date=req.body.date;
   data.list=req.body.list;
   data.save(data)
   .then(saveddata =>
    {
        res.send(saveddata);
    })
});

module.exports=router;