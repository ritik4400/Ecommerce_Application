const express = require('express')
var bodyParser = require('body-parser')
const connectDB = require('./src/db/db')
const dotenv = require('dotenv').config()


const app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = process.env.port 
app.listen(port, async()=>{
    console.log('server successfully connected');
    await connectDB();
})