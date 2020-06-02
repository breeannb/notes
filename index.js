
const { parse } = require('./lib/input');
// Requires the library files you will be writing (input, notes)
// Instantiates an instance of an "Input" parser module
    // Parses the command line input and returns the command and data
// Passes the command to the Notes library, which executes the command

console.log(parse(process.argv)); 

// use parse to create an action from process.argv
// use valid to check if it is a valid action
// -> if valid execute
// -> otherwise show error