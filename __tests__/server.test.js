'use strict';
const {app} = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(app);

//add the name of the module that I am testing 
describe('my API Server', ()=> {

    // add scenarios & test cases 
    it('handles 404 on a bad route', async () => {
       
        const response = await request.get('/asd'); // async
        expect(response.status).toEqual(404);
    });


    it('handles 404 on a bad method', async () => {
    
        const response = await request.post('/'); // async
        expect(response.status).toEqual(404);
    });

    //  1. callbacks ---> Promises (Promise.then() ) ----> Async/Await
    
    it('handles my internal server errors', async () => {
        const response = await request.post('/bad'); // async
        expect(response.status).toEqual(500);
    });
    
    
    
    


});