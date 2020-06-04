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
    } else if (action.type === 'delete') {
            return this.findByIdAndDelete({
                _id: action.payload
            })
        }


}



module.exports = mongoose.model('Note', noteSchema)
