var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('express-error-handler');
var morgan = require('morgan');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codeLlama');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());


var isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 8000;
var host = process.env.APP_HOST || 'localhost';
var publicPath = path.resolve(__dirname, '..', 'public');

//set up routes here from routes file
require('./routes')(app, express);

app.listen(port, function () {
});


// var express = require('express');
// var mongoose = require('mongoose');

// var app = express();

// // connect to mongo database named "shortly"
// mongoose.connect('mongodb://localhost/shortly');

// // configure our server with all the middleware and routing
// require('./config/middleware.js')(app, express);
// require('./config/routes.js')(app, express);

// // start listening to requests on port 8000
// app.listen(8000);

// // export our app for testing and flexibility, required by index.js
module.exports = app;


