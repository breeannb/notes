
class Note { 

    static add(action){
        const note = {
            id: Date.now(),
            text: action.payload
        };

        console.log(`Note added: ${note.text}`);
        return note;
    }

    static execute(action) {
        
        if (action.type === 'add'){
            return this.add(action); 
        } else {
            return {
                error: 'you did a bad job, try again'
            }
        }
    }

};


module.exports = {
    Note
}; 

