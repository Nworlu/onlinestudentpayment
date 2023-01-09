const mongoose = require('mongoose')

async function connectDB(uri){
    try {
        return mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(()=>{
            console.log("Connected to db")
        })
    } catch (error) {
        console.log(error)
    }  
}

module.exports = connectDB