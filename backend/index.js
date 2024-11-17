const express = require('express')
var bodyParser = require('body-parser')
const connectDB = require('./src/db/db')
const dotenv = require('dotenv').config()
const userController = require('./src/routes/userRoutes')


const app = express()
app.use(bodyParser.json())
app.use('/api',userController)

app.get('/', function (req, res) {
  res.send('Hello World')
})

const port = process.env.port 
app.listen(port, async()=>{
    console.log('server successfully connected');
    await connectDB();
})