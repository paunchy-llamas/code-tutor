var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('express-error-handler');
var morgan = require('morgan');
var proxy = httpProxy.createProxyServer();


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
var host = process.env.APP_HOST || 'localhost';
var port = isProduction ? 8080 : 3000;
var publicPath = path.resolve(__dirname, '..', 'public');

if (!isProduction) {
  // Any requests to localhost:3000/assets i proxied
  // to webpack-dev-server
  app.all(['/assets/*', '*.hot-update.json'], function (req, res) {
    proxy.web(req, res, {
      target: 'http://' + host + ':3001'
    });
  });
}

// serve static assets from here
app.use(express.static(publicPath));

//set up routes here from routes file
require('./routes')(app, express);

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});

