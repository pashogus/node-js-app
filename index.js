require('./models/db.js')
const express = require("express");
const bodyParser=require('body-parser');
const rateController = require('./Controller/rateController.js');
const data = require('./Controller/dataController.js');
const datePrimary = require('./Controller/datePrimaryController.js');
const path = __dirname + '/static/';
const cors = require('cors');


var app = express();
app.use(express.static(path));

var corsOptions = {
  origin: 'http://localhost:4200'
}

app.use(cors(corsOptions));

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
  });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

app.use('/rate',rateController);
app.use('/data',data);
app.use('/datePrimary',datePrimary);
