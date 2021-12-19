const Student = require('../db/Student.js');

const controller = {
  //get
  getStudents: (req, res) => {
    Student.find({})
    .then((results) => res.status(200).send(results))
    .catch(err => res.status(404).send(err))
  },
  //create
  createStudent: (req, res) => {
    console.log(req.body)
    Student.create({ name: req.body.name, imageUrl: req.body.url})
    .then(() => res.status(201).send(console.log(`${req.body.name} created.`)))
    .catch(err => res.status(404).send(err))
  },
  //update
  updateStudent: (req, res) => {
    Student.updateOne({_id: req.params.id}, {name: req.body.name})
    .then(() => res.status(200).send(console.log(`Student's name changed to "${req.body.name}".`)))
    .catch(err => res.status(404).send(err))
  },
  //delete
  deleteStudent: (req, res) => {
    Student.deleteOne({_id: req.params.id})
    .then(() => res.status(200).send(console.log('Student Deleted.')))
    .catch(err => res.status(404).send(err))
  }
}

module.exports = controller;