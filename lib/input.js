//DIRECTIONS
// Exports parse and valid functions
// Uses minimist (or any other node/npm library of your choosing) to read command line arguments
// valid evaluates and validates the input (returns true or false)
    // Is the command (i.e. '--add') a valid command
    // Is there data associated with the command
// parse returns an action containing the type to perform and the payload for the action    

//functions that relate to parse

//skip will skip over the first two commands in command line 
const skip = (n, arr) => { 
    return arr.slice(n); 
}


const parse = () => {

};
    //returns type and payload properties 


// //functions that relate to valid 

// const valid = () => {
//      //invalid input returns false 
// };


//export parse and valid functions
module.exports = {
    // valid, 
    skip,
    parse
}