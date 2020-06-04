
const mongoose = require('mongoose');
const Note = require('./lib/models/Notes.js'); 
const { Input } = require('./lib/Input');
let parsedArray = new Input(process.argv); 
let response; 
console.log(parsedArray.isValid()) 

if(parsedArray.isValid()) {
    response = Note.execute(parsedArray); 
} else {
    console.log('try again please')
}

const action = parse(process.argv);
const isValid = valid(action); 

// mongoose.connect('mongodb://localhost:27017/notelist', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
