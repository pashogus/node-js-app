const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const date_as_primary = require("../models/date_as_primary");
var dataModel = require('../models/date_as_primary');

router.get("/v1",(req,res)=>
{
    
    dataModel.find().then(getData =>
        {      
            res.status(200).json( getData  
              );  
        })

});

router.post("/submit/v1",(req,res)=>
{

    let  dateinrequest=new Date(req.body._id);
    console.log("*******",dateinrequest);
    console.log("%%%%%%%%%%",req.body.list);
    dataModel.updateOne({_id:dateinrequest},{$push: {list:req.body.list}} ,  { upsert: true }, (err,response)=>
    {
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.send(response);
        }
    });
   
});

router.post("/update/v1",(req,res)=>
{

    let  dateinrequest=new Date(req.body._id);
    console.log("*******",dateinrequest);
    console.log("%%%%%%%%%%",req.body.list);
    //upsert true , will insert if data not present
    dataModel.findByIdAndUpdate({_id:dateinrequest},{$push: {list:req.body.list}} ,  { upsert: true }, (err,response)=>
    {
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.send(response);
        }
    });
   
});

module.exports=router;