
const minimist = require('minimist');

class Input {
    constructor() {
        this.action = [];
    }

    parse(arr){
        const obj = minimist(arr); 

        delete obj._;
    
        const [[type, payload]] = Object.entries(obj); 
    
        return {
            type, 
            payload
        };
    }

    valid(action) {
        if(action.type === 'add' || action.type === 'aa'){
           return action.type === 'add' && action.payload;
        } 
    }

}

module.exports = {
    Input
}
