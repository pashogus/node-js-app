require('./models/db.js')
const express = require("express");
const bodyParser=require('body-parser');
const rateController = require('./Controller/rateController.js')

var app = express();

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
  });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/rate',rateController);
