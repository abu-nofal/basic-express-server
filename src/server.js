'use strict';

const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger =require('./middelwear/logger')
const validator =require('./middelwear/validator')

const app = express();
app.use(logger);

const start=(port)=> {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}

app.get('/', (req, res)=> {
    res.send('hello m3lem')
});
app.post('/bad', (req,res)=> {
    let number = 12;
    number.map(x=> console.log(x));
    res.send('this Bad Route ');
})

app.get('/person',validator, (req, res)=> {
    
        res.json({
            name:req.name
        })
       
    
    
});



app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
     app,
     start
}
