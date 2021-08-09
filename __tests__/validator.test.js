'use strict'

const {app} = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(app);

describe('validator middleware', ()=> {
   
    
    it('200 if the name is in the query string', async () => {
        const response = await request.get('/person?name=ahmad'); // async
        expect(response.status).toEqual(200);
        
    
    });

    it('given an name in the query string, the output object is correct', async () => {
        const response = await request.get('/person?name=ahmad'); // async
        
        
        expect( response.body).toEqual({name: 'ahmad'});
        
    });

})