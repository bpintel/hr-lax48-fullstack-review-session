const Student = require('../db/Student.js');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      Student.find({})
      .then((allStudents) => res.status(200).send(allStudents))
      .catch((err) => res.status(404).send(err))
    },
    postStudent: function (req, res) {
      // TODO: add your code here to add a new student
      Student.create({name: req.body.name, imageUrl: req.body.imgurl})

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      let { id } = req.params;
      Student.findOneAndUpdate({_id: id}, {name: req.body.name})
      .then(() => res.status(200).send('Student was updated'))
      .catch((err) => res.status(404).send(err))

    }
  }
};

module.exports = controller