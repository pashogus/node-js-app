const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var rateModel = require('../models/rateSchema.js');
var itemModel = require('../models/items_schema.js');


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
    var rateObject = new rateModel();
    rateObject.item=req.body.item;
    rateObject.rate=req.body.rate;
    rateObject.save(rateObject)
    .then(data=>
    {
res.send(data);
    })

});

router.post("/v1/items",(req,res)=>
{
    var itemObject = new itemModel();
    itemObject.act_date=req.body.date;
    itemObject.groceries=req.body.groceries;
    itemObject.vegetables=req.body.vegetables;
    itemObject.others=req.body.others;
    itemObject.save(itemObject)
    .then(data=>
    {
res.send(data);
    })

});

router.get("/v1/items/:flag/:value",(req,res)=>
{
    if(req.params.flag=="date")
    {
    itemModel.find({"act_date":req.params.value})
    .then(data=>
    {
res.send(data);
    });
}
else if (req.params.flag=="item")
{
    itemModel.find({"item":req.params.value})
    .then(data=>
    {
res.send(data);
    });
}

});


module.exports=router;