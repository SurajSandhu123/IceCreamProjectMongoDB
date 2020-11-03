var express = require('express');
var IceCreamController = require('./controllers/IceCreamController');

var app = express();

//Set up Template Engine
app.set('view engine','ejs');

//Set up Static Files
app.use('/assets', express.static('assets'));

//Fire Controller
IceCreamController(app);

app.listen(5000);