const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    department_name:{
        type:String,
        required:[true, 'department name is required']
    },
    department_code:{
        type:String,
        required:[true, 'department name is required']
    },
    faculty_id:{
        type: mongoose.Schema.ObjectId,
        ref:'faculty'
    },
    price_dues:{
        type:Array
    }
})

module.exports = mongoose.model('department', departmentSchema)
