const router = require('express').Router();
const Student = require('../db/models/students');

router.get('/:studentId', async (req, res, next) => {
  try {

    const student = await Student.findById(req.params.studentId)
    if (!student) return res.sendStatus(404);
    res.json(student);

  } catch (error) { next(error) }
});

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) { next(error) }
});

router.post('/', async (req, res, next) => {
  try {
    const student = await Student.create(req.body)
    res.status(201).json(student);
  } catch (error) { next(error) }
});

router.put('/:id', async (req, res, next) => {
  try {
    const [updatedRowCount, [updatedStudent]] = await Student.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    })
    res.json(updatedStudent);
  } catch (error) { next(error) }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Student.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204)
  } catch (error) { next(error) }
});

module.exports = router;
