const mongoose = require('mongoose'); 

const noteSchema = new mongoose.Schema({
    text: { 
        type: String, 
        required: true
    }
});

noteSchema.statics.execute = function(action){
    if(action.type === 'add') {
        
        return this.create({
            text: action.payload
        });
        
    } else if (action.type === 'list') {
        return this.find();
    }


}



module.exports = mongoose.model('Note', noteSchema)
