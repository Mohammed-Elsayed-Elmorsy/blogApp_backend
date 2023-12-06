// Server
const express = require('express')
const app = express()
app.use(express.json())
// Use Static Files Like Images 
app.use('/uploads', express.static(__dirname + '/uploads'))
// cookie parser
const cookieParser = require('cookie-parser')
app.use(cookieParser())
// CORS
const cors = require('cors')
app.use(cors({ credentials: true, origin: '*' }))
// Body Parser
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
// USE Routes
const router = require('./Routes/Routes')
app.use(router)
// TO USE ENV VARIABLES 
require('dotenv').config()
// db connection 
const connect = require('./config/Db')
connect()
// Running Server
app.listen(5000, console.log('port 5000'))