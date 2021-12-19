
const { then } = require('../db');
const Student = require('../db/Student');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      //use find model find method to fetch all docs
      Student.find({})
      .then(results => res.status(200).send(results))
      .catch(err => res.status(404).send(err))
    

    },
    postStudent: function (req, res) {
      // TODO: add your code here to add a new student
      Student.create({name: req.body.name, imageUrl: req.body.imageUrl})
      .then(() => res.status(201).send(`${req.body.name} added.`))
      .catch(err => res.status(404).send(err))

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      Student.updateOne({_id: req.params.id}, {name: req.body.name})
      .then(() => res.status(200).send(console.log('Student name updated')))
      .catch((err) => res.status(404).send(err))

    },
    deleteStudent: function (req, res) {
      Student.deleteOne({_id: req.params.id})
      .then(() => res.status(200).send(console.log('Student was deleted.')))
      .catch(err => res.status(404).send(err))
    }
  }
};

module.exports = controller