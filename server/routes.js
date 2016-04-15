var userController = require('./user/userController.js');
var helpers = require('./helpers.js'); // our custom middleware
var path = require('path');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var rootPath = path.join(__dirname, '..');


var rootPath = path.join(__dirname, '..');


module.exports = function (app, express) {
  app.use(express.static('client'));

  // app.get('/', function(req, res) {
  //   res.sendFile(path.join(__dirname, '/../public', 'index.html'));
  // });
   

  // temporary path for testing: get all tutors in db
  app.get('/api/tutor/all', userController.getAllTutors);
  app.get('/api/tutor/search', userController.search);
  app.get('/api/tutor/:username', userController.findTutor);

  app.post('/api/users/signup', userController.signup);
  app.post('/api/users/signin', userController.signin);

  // app.get('/tutor/:username');
  // app.get('/api/users/img/:objectId', userController.getImg);

  app.use('/update', helpers.decode);
  app.post('/api/users/profile', helpers.decode, multipartMiddleware, userController.saveProfile);

  app.get('/*', function(req, res) {
    res.sendFile(rootPath + '/client/index.html');
  });
  
  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

