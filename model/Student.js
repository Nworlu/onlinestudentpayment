const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:[true, 'firstname is required'],
    },
    lastname:{
        type: String,
        required:[true, 'lastname is required']
    },
    email:{
        type: String,
        required:[true, 'email is required'],
        // unique: true
    },
    password:{
        type: String,
        required:[true, 'password is required'],
    },
    matric_no:{
        type: String,
        required:[false, 'matriculation number is required'],
        unique: true
    },
    level:{
        type:Number
    },
    faculty_id:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'faculty'
    },
    department_id:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'department'
    },
    has_paid:{
        type: Boolean,
        default:false
    }
})


module.exports = mongoose.model('student',studentSchema)