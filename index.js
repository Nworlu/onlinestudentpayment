const express = require('express');
const app = express()
const morgan = require('morgan');
const cors = require('cors')
const createError = require('http-errors')
const connectDB = require('./db/connect');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');
const studentRoute = require('./routes/user')
const departmentRoute = require('./routes/department')
const facultyRoute = require('./routes/faculty')
const path = require('path')

const PORT = 3000
require('dotenv').config()

// template engine
app.set('view engine', 'ejs');
app.set('views', './views')

app.use(cors())

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan("dev"))

app.use('/students', studentRoute)
app.use('/department', departmentRoute)
app.use('/faculty', facultyRoute)


app.use(function(req,res,next){
    next(createError(404))
})
app.use(notFound)
app.use(errorHandler)

async function start(){
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=>{
            console.log(`Listening on port: ${PORT}`)
        })
    } catch (error) {
        
    }
}

start()



