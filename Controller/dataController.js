const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var dataModel = require('../models/data_schema');

var responseObject = new Object();
/*
router.get("/v1",(req,res)=>
{
    
    dataModel.find().then(getData =>
        {      
            res.status(200).json( getData  
              );  
        })

});


router.get("/v1/:id",(req,res)=>
{
    
    dataModel.find({date : req.params.id}).then(getData =>
        {      
            res.status(200).json( getData  
              );  
        })

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

router.put("/v1/:id",async (req,res)=>
{
    
    dataModel.findOneAndUpdate({date: req.params.id}, {$set: req.body} , (err,response) =>
    {
        if(err)
        {
            res.status(500).send(err);
        }
        else{
            dataModel.find({date : req.params.id}).then(getData =>
                {      
                    res.status(200).json( getData  
                      );  
                });
        }
    });

       
   
});

*/


router.get("/v1",(req,res)=>
{
    
    dataModel.find().then(getData =>
        {      
            res.status(200).json( getData  
              );  
        })

});

router.post("/v1",(req,res)=>
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

router.put("/v1",(req,res)=>
{

    let  dateinrequest=new Date(req.body._id);
    console.log("*******",dateinrequest);
    console.log("%%%%%%%%%%",req.body.list);
    dataModel.updateOne({_id:dateinrequest},{$set: {list:req.body.list}} , (err,response)=>
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

router.post("/range/v1",(req,res)=>
{
    let  fromdate=new Date(req.body.from_date);
    let  todate=new Date(req.body.to_date);
    dataModel.find({_id:{
        $gte: fromdate,
        $lt: todate
    }}, (err,response)=>
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