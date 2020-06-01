// Exports an execute function
// execute takes an action and chooses
// How will you use that object to run the correct method?
// You can predict that add won't be the only action we're going to have to handle...
// write an add function that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed


//RYAN'S NOTES AND WALKTHROUGH WE DID TOGETHER 
const add = action => { 
    const note = {
        text: action.payload
    };

    console.log(note); 
}; 

const execute = action => { 
    //series of ifs 
    // switch 
    //dictionary of functions 

}; 

//exports 
module.exports {
    execute, 
    add 
}; 