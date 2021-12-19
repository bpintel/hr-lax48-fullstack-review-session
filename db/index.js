const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/review';

const db = mongoose.connect(mongoUri, {
   useNewUrlParser: true,
   useUnifiedTopology: true 
});

module.exports = db;