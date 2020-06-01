//imports 
const { skip, parse } = require('./input.js');

// DIRECTIONS
// To test the parse function pass it an array of command line arguments (e.g. ['--add', 'My Note'])
// Given good input:
    // The valid function returns true
    // The parse function returns an object with type and payload properties
// Given invalid input:
    // The valid function returns false


//test a parse function pass it an array of command line arguments (e.g. ['--add', 'My Note'])

describe('parse', () => {

    //to skip over node and index.js in command line
    it('skips 2 items in an array for command line', () => {
        const arr = ['node', 'index.js', '--add', '"My Note"'];
        const skippedArr = skip(2, arr);

    expect(skippedArr).toEqual(['--add', '"My Note"']);
    });

    //establishing that string is flag --add and returning false
    it('can tell if a string is a flag', () => {
        const flag = '--add';
        const str = 'add--';

        expect(isFlag(flag)).toBeTruthy();
        expect(isFlag(str)).toBeFalsy();
    });
});