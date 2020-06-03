
//adding a note to the db 
const add = action => { 
    const note = {
        id: Date.now(),
        text: action.payload
    };

    console.log(`Note added: ${note.text}`);

    return note; 
}; 


// const execute = action => { 
 
//         switch(action.type) {
//             case 'add': 
//             return add(action);

//             default: 
//         }
// }; 



//CLASS NOTE AND REFERENCING ABOVE STATEMENTS 

class Note { 

    static add(action){
        const note = {
            id: Date.now(),
            text: action.payload
        };

        console.log(`Note added: ${note.text}`);
        return note;
    }

};


//exports 
module.exports = {
    Note
}; 

