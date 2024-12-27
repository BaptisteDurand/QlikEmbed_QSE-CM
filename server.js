require('dotenv').config();
var express = require('express');
const path = require('path');
var https_exp = require('https');
const fs = require("fs");
const bodyParser = require('body-parser');
const port=1235;

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'src')));

// Endpoint for setup
app.get('/login', (req, res) => {
  res.json({
    appUrl: process.env.APP_URL,
    token: process.env.TOKEN,
  });
});


//======================================================================================
//
//      SERVER CREATION
//
//======================================================================================
https_exp.createServer({
  key: fs.readFileSync('./server_certs/server.key'),
  cert: fs.readFileSync('./server_certs/server.cert')
}, app)
.listen(port, '0.0.0.0', function () {
  console.log('Https Server listening! Go to https://trackingfactory.eu:'+port)
})
