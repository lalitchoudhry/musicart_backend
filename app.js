// packages
require('dotenv').config();
const express = require('express');

const app = express();

// middleware
app.use(express.json());

//routes
app.get('/', (req, res)=>{
    res.send('Everything is ok');
})

module.exports = app;