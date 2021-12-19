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

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      Student.updateOne({_id: req.params.id}, {name: req.body.name})
      .then(results => res.status(200).send('Student name updated'))
      .catch((err) => res.status(404).send(err))

    }
  }
};

module.exports = controller