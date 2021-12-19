const Student = require('../db/Student.js');

const controller = {
  //get
  getStudents: (req, res) => {
    Student.find({})
    .then((results) => res.status(200).send(results))
    .catch(err => console.log(err))
  },
  //create
  createStudent: (req, res) => {

  },
  //update
  updateStudent: (req, res) => {

  },
  //delete
  deleteStudent: (req, res) => {

  }
}

module.exports = controller;