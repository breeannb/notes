//imports
const minimist = require('minimist');

//take an array and output an object using minimist
const parse = arr => {
    const obj = minimist(arr); 
    //removes the _ from the object
    delete obj._;

    const [[type, payload]] = Object.entries(obj); 

    return {
        type, 
        payload
    };
};

const valid = action => {

    return action.type === 'add' && action.payload;
};

//REWRITING INPUTS HERE AS A CLASS AND USING ABOVE AS A REFERENCE

class Input {
    constructor() {
        this.action = [];
    }

    parse(arr){
        const obj = minimist(arr); 
        //removes the _ from the object
        delete obj._;
    
        const [[type, payload]] = Object.entries(obj); 
    
        return {
            type, 
            payload
        };
    }

    valid(action) {
        return action.type === 'add' && action.payload;
    }

}

module.exports = {
    Input
}