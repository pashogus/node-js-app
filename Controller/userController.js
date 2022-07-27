const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var dataModel = require('../models/user_schema');

router.post("/register/v1",(req,res)=>
{
    let data = new dataModel();
    data.firstName=req.body.firstName;
    data.lastName=req.body.lastName;
    data.userName=req.body.userName;
    data.password=req.body.password;
    data.phoneNumber=req.body.phoneNumber;
    dataModel.findOne({userName:req.body.userName}).then(response =>
        {    
if(response !=null)
{
    res.status(200).json({status:"failure",userName:""});
}

else
{
    data.save(data)
    .then(saveddata =>
     {
        res.status(200).json( {status:"success",userName:saveddata.userName}  
            );  
     })
}
        });
   
});

router.get("/",(req,res)=>
{
    dataModel.find().then(getData =>
        {      
            res.status(200).json( getData  
              );  
        })
});

router.post("/login/v1",(req,res)=>
{
    
    dataModel.findOne({userName:req.body.userName}).then(response =>
        {    
            if(response !=null)
            {
           console.log(req.body.password + "" + response.password );
           let flag = response.password == req.body.password ? true : false;
           if(flag) 
           {
           res.status(200).json({flag : 'true',userName:response.userName});  
           }
           else
           {
            res.status(200).json({flag:'false',userName:""});  
        }
    }
    else
    {
        res.status(200).json({flag:'false'});  
    }
        })
});

module.exports=router;