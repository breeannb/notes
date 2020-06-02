//NOTES FROM DIRECTIONS
// Exports an execute function
// execute takes an action and chooses
    // How will you use that object to run the correct method?
    // You can predict that add won't be the only action we're going to have to handle...
// write an add function that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed


//adding a note to the db 
const add = action => { 
    const note = {
        id: Date.now(),
        text: action.payload
    };

    console.log(`Note added: ${note.text}`);

    return note; 
}; 


const execute = action => { 
    //series of ifs 
    // switch 
    //dictionary of functions 

        // if(action.type === 'add') {
        //     return add(action);
        // } else if (action.type === 'list'){
        
        // } else if (action.type === 'delete') {

        // } else {

        // }

        switch(action.type) {
            case 'add': 
            return add(action);

            default: 
        }
}; 

//exports 
module.exports = {
    execute, 
    add 
}; 


// return {
//     error: 'there was an error and we cannot add, please try again'
// };