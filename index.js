
const { parse, valid } = require('./lib/input');
const { execute } = require('./lib/notes');

const action = parse(process.argv);
const isValid = valid(action); 

if(isValid);
else console.log('invalid command');