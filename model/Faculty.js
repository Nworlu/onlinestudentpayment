const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    faculty_name:{
        type:String,
        required:[true, 'faculity name is required']
    },
    faculty_code:{
        type:String,
        required:[true, 'faculity name is required'],
        unique: true
    }
})

module.exports = mongoose.model('faculty', facultySchema)