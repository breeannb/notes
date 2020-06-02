//imports 
const { Input } = require('./Input.js');

describe('input functions', () => {

    let input; 
    beforeEach(() => { 
        input = new Input(); 
    });

    //tests an empty array to start
    it('has an action property on input', () => {
        expect(input.action).toEqual([]);
    });

    //to skip over node and index.js in command line
    it('can parse command line arguments', () => {
        
        const commandLineArguments = ['node', 'index.js', '--add', 'I am a note']; 
        input.parse(commandLineArguments)

        expect(input.parse(commandLineArguments)).toEqual({
            type: 'add', 
            payload: 'I am a note'
        });
    });

    //tests that input is valid
    it('can validate command line arguments with add', () => {
        
        const action = {
            type: 'add', 
            payload: 'my note'
        };
        const isValid = input.valid(action);
        

        expect(isValid).toBeTruthy();
    });


    it('can validate command line arguments with a', () => {
        const action = {
            type: 'a', 
            payload: 'my note'
        };

        const isValid = input.valid(action);

        expect(isValid).toBeFalsy();
    });

    it('can validate command line arguments with invalid type', () => {
        const action = {
            type: 'badType', 
            payload: 'my note'
        };

        const isValid = input.valid(action);

        expect(isValid).toBeFalsy();
    });


});