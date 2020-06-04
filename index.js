
// const { parse, valid } = require('./lib/input');
// const { execute } = require('./lib/notes');

// const action = parse(process.argv);
// const isValid = valid(action); 

// if(isValid);
// else console.log('invalid command');


// const express = require('express'); 
// const app = express(); 
const mongoose = require('mongoose');
const Note = require('./lib/models/Notes.js'); 

mongoose.connect('mongodb://localhost:27017/play', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

