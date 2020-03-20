const bodyParser = require('body-parser');
const user = require('../routes/user/user');
const userQuestions = require('../routes/admin/createQuestion');
const personalAnswers = require('../routes/user/personalAnswers');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use('/api/user', user);
  app.use('/api/question', userQuestions);
  app.use('/api/answer', personalAnswers);
};
