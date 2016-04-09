var userController = require('./user/userController.js');
var helpers = require('./helpers.js'); // our custom middleware
var path = require('path');

module.exports = function (app, express) {
  app.use(express.static('client'));

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public', 'index.html'));
  });
  
  app.get('/tutor/:name', userController.findTutor);

  // temporary path for testing: get all tutors in db
  app.get('/api/tutor/all', userController.getAllTutors);
  app.get('/api/tutor/:name', userController.getTutor);

  app.post('/api/users/signup', userController.signup);
  app.post('/api/users/signin', userController.signin);
  app.post('api/tutor/profile', userController.saveProfile);
  
  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

