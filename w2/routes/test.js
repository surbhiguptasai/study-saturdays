const router = require('express').Router();
const Test = require('../db/models/tests');
const Student = require('../db/models/students');

router.get('/passing', async (req, res, next) => {
  try {
    const tests = await Test.passing();
    res.json(tests);
  } catch (error) { next(error)}
});

router.get('/', async (req, res, next) => {
  try {
    const tests = await Test.findAll();
    res.json(tests);
  } catch (error) { next(error)}
});

router.get('/:id', async (req, res, next) => {
  try {
    const test = await Test.findById(req.params.id);
    res.json(test);
  } catch (error) { next(error)}
});

router.get('/subject/:subject', async (req, res, next) => {
  try {
    const test = await Test.findAll({
      where: {
        subject: req.params.subject
      }
    })
    res.json(test);
  } catch (error) { next(error) }
});

router.post('/student/:studentId', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.studentId);
    const test = await Test.create(req.body);

    test.setStudent(student);
    res.status(201).json(test);

  } catch (error) { next(error) }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Test.destroy({
      where: {
        id: req.params.id
      }
    });

    res.sendStatus(204);
  } catch (error) { next(error) }
});

module.exports = router;
