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

  },
  //update
  updateStudent: (req, res) => {
    Student.updateOne({_id: req.params.id}, {name: req.body.name})
    .then(() => res.status(200).send(console.log(`Student's name changed to "${req.body.name}".`)))
    .catch(err => res.status(404).send(err))
  },
  //delete
  deleteStudent: (req, res) => {

  }
}

module.exports = controller;