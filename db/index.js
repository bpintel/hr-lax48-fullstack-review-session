const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/review';

const db = mongoose.connect(mongoUri);

module.exports = db;