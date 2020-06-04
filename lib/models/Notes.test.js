const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose'); 
const Note = require('./Notes');
const mongodb = new MongoMemoryServer; 

describe('Note Schema', () => {

    beforeAll(() => {
        return mongodb.getUri()
        .then (uri => mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }));
    });

    beforeEach(() => {
        return mongoose.connection.dropDatabase(); 
    });

    afterAll(() => {
        return mongoose.connection.close()
        .then(() => mongodb.stop());
    })


    it('Can add a note', () => {
        const action = { 
            type: 'add', 
            payload: 'My Note'
        }
        return Note.execute(action)
        .then(notes => {
            expect(notes.toJSON()).toEqual({
                _id: expect.anything(),
                text: 'My Note',
                __v: 0
            })
        })
    })

    it('Can get a list of notes', async() => {
        action = {
            type: 'list'
        }

        add = {
            type: 'add',
            payload: 'My Note'
        }

        await Note.execute(add); 

        return Note.execute(action)
        .then(notes => {
            expect(notes.map(note => note.toJSON())).toEqual([{
                _id: expect.anything(),
                text: 'My Note',
                __v: 0
            }])
        })
    });

});
