const { Note } = require('./notes.js');

describe('note functions', () => {

    it('adds a note', () => {
        const action = {
            type: 'add', 
            payload: 'My Note'
        }; 

        expect(Note.add(action)).toEqual({
            id: expect.any(Number),
            text: 'My Note'
        });

    });

    it('executes an action', () => { 
        const action = { 
            type: 'add', 
            payload: 'My Note'
        };

        expect(Note.execute(action)).toEqual({
            id: expect.any(Number),
            text: 'My Note'
        });
    });

});
