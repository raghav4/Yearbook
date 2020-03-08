const experss = require('express');
const router = experss.Router();
const { Question, validate } = require('../../models/admin/question');

router.get('/', async (req, res) => {
  const questions = await Question.find();
  res.send(questions);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const question = new Question({
    question: req.body.question,
  });
  await question.save();
  res.send(question);
});

router.delete('/:id', async (req, res) => {
  let question = await Question.findById(req.params.id);
  if (!question)
    return res
      .status(400)
      .send('Question with the given id doesnt exist in the db');
  question = await question.delete();
  res.send(question);
});

module.exports = router;
