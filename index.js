require('./models/db.js')
const express = require("express");
const bodyParser=require('body-parser');
const rateController = require('./Controller/rateController.js')

var app = express();

app.listen(3000, ()=>
{
console.log("Express started at port 3000");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/rate',rateController);

exports.app = functions.https.onRequest(app);