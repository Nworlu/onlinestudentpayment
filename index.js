const express = require('express');
const app = express()
const morgan = require('morgan');
const cors = require('cors')
const connectDB = require('./db/connect');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');
const studentRoute = require('./routes/user')
const departmentRoute = require('./routes/department')
const facultyRoute = require('./routes/faculty')

const PORT = 3000
require('dotenv').config()


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan("dev"))
app.use(cors())

app.use('/student', studentRoute)
app.use('/department', departmentRoute)
app.use('/faculty', facultyRoute)



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



