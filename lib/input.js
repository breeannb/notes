//DIRECTIONS
// Exports parse and valid functions
// Uses minimist (or any other node/npm library of your choosing) to read command line arguments
// valid evaluates and validates the input (returns true or false)
    // Is the command (i.e. '--add') a valid command
    // Is there data associated with the command
// parse returns an action containing the type to perform and the payload for the action    

//functions that relate to parse

//skip will skip over the first two commands in command line 


//imports
const minimist = require('minimist');



//take an array and output an object using minimist
const parse = arr => {
    const obj = minimist(arr); 
    //removes the _ from the object
    delete obj._;

    //below, the flag defaults to the 1st item
    const [[type, payload]] = Object.entries(obj); 

    return {
        type, 
        payload
    };
};

const valid = action => {
    //return true if the type is valid command (add)
    // and the payload isn't empty
    //return false 

    // const { type, payload } = action; 
    
    // if(action.type === 'add'){
    //     if(action.payload){
    //         return true
    //     }
    // }
    // return false

    return action.type === 'add' && action.payload;
};

//export parse and valid functions
module.exports = {
    parse, 
    valid
}