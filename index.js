const express = require('express');
const cors = require('cors');
const projectroute = require ('./routes/projectsroute')
const contactroute = require ('./routes/contactroute')
const app = express();
const path = require('path');

app.use(cors())
app.use(express.json())

app.set('port', process.env.port || 3000) 


app.get('/', (req, res, next) =>{
    res.send('<h1>Hello world<h1>');
})
app.use('/projects', projectroute)

app.use('/projects', contactroute)



app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})