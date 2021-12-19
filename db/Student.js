const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const studentSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;


//require mongoose
//require db from index.js
//promise everything globally for older versions of mongoose

//create a new collection/schema with (new mongoose.Schema)
//add columns to schema

//creat name for our new collection and make it inherit from mongoose.model
  //mongoose.model('name of collection', -schema made above-)

  //export this new compiled model for later use