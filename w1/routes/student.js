// Express routes
const router = require('express').Router()

//Import models
let db = require('../db/db');
let { students, tests } = db;

// Get Students
router.get('/', function(req, res ,next) {
  res.json({students})
})

// Get Student by Id
router.get('/:id', function(req, res ,next) {
  let student = students.filter(person => person.id === req.params.id)[0];
  res.json({student})
})

// Add Student
router.post('/', function(req, res ,next) {
  let newId = students.length + 1;
  let student = {
  	id : newId,
  	name : req.body.name
  }
  students.push(student)
  res.json({students})
})

// Delete Student
router.delete('/:id', function(req, res ,next) {
  let newClass = students.filter(person => person.id != req.params.id)
  students = newClass;
  res.json({students})
})

// Update Student
router.put('/:id', function(req, res ,next) {
  let updatedStudent = students.filter(person => person.id === req.params.id)[0];
  updatedStudent.name = req.body.name;
  students[req.params.id] = updatedStudent;
  res.json({students})
})

module.exports = router;