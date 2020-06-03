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

    // it('adds a note and console.logs', () => {
        
    //     // {log: () => print to screen}
    //     console.log = jest.fn(); 

    //     const action = { 
    //         type: 'add',
    //         payload: 'My Note'
    //     }

    //     const note = add(action);

    //     //expect that a console.log happened 
    //     expect(console.log).toHaveBeenCalledTimes(1); 
    //     expect(console.log).toHaveBeenCalledWith(`Note added: ${note.text}`);
    // });

    it('executes an action', () => { 
        const action = { 
            type: 'add', 
            payload: 'My Note'
        };

        const note = execute(action); 

        expect(note).toEqual({
            id: expect.any(Number),
            text: 'My Note'
        });
    });

    // it('does nothing if the action type is not understood', () => {
    //     const action = {
    //         type: 'badType',
    //         payload: 'whatever'
    //     };

    //     const result = execute(action);

    //     expect(result).toBeUndefined(); 
    // });


});