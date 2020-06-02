//imports 
const { parse, valid } = require('./input.js');

describe('input functions', () => {

    //to skip over node and index.js in command line
    it('can parse command line arguments', () => {
    
        const commandLineArguments = ['node', 'index.js', '--add', 'I am a note']; 
        const action = parse(commandLineArguments);

        expect(action).toEqual({
            type: 'add', 
            payload: 'I am a note'
        });
    });

    //
    it('can validate command line arguments with add', () => {
        const action = {
            type: 'add', 
            payload: 'my note'
        };

        const isValid = valid(action);

        expect(isValid).toBeTruthy();
    });

    it('can validate command line arguments with a', () => {
        const action = {
            type: 'a', 
            payload: 'my note'
        };

        const isValid = valid(action);

        expect(isValid).toBeFalsy();
    });

    it('can validate command line arguments with invalid type', () => {
        const action = {
            type: 'badType', 
            payload: 'my note'
        };

        const isValid = valid(action);

        expect(isValid).toBeFalsy();
    });


});