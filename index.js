'use strict';
require('dotenv').config();

const {start} = require('./src/server');
let PORT=process.env.PORT
start(PORT|| 8000);
