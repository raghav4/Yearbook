const bodyParser = require('body-parser');
const user = require('../routes/user');
const userQuestions = require('../routes/admin/userQuestions');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use('/api/user', user);
  app.use('/api/question', userQuestions);
};
