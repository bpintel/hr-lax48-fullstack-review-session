const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/hrla48-fullstack-review';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = db;


//require mongoose
//create a uri to store tha DB

//assign const db to a connected DB with uri as first arg and anything else in an obj as second arg

//export connected db