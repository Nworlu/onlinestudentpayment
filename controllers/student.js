const Student = require('../model/Student');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const createStudent = async (req,res)=>{
    let { firstname, lastname, email, password, matric_no, level, faculty_id, department_id } = req.body
    try {
        let hashPassword = await bcrypt.hash(password, 10)
        const newStudent = new Student({
            firstname,
            lastname,
            email,
            matric_no,
            level,
            password:hashPassword,
            faculty_id,
            department_id
        })
        await (await Student.create(newStudent)).populate([{path:"faculty_id"}, {path:"department_id"}])
        res.status(200).json({student:newStudent})
    } catch (error) {
        res.status(500).json(error)
        
    }
}

const loginStudent = async (req,res)=>{
    let {matric_no, password} = req.body
    if(matric_no && password){
        try {
            Student.findOne({matric_no}).then( async (user)=>{
                if(!user){
                    res.status(404).json({
                        success: false,
                        message: "User not found"
                    })
                }
                else{
                    if(await bcrypt.compare(password, user.password)){
                        let token = jwt.sign(
                            {_id:user._id,mat:user.matric_no},
                            process.env.ACCESS_TOKEN_SECRET,
                            {expiresIn: '60s'}
                        )
                        res.status(200).json({
                            success:true,
                            token:token
                        })
                    }
                }
            })
        } catch (error) {
            
        }
    }
}


module.exports = {
    createStudent,
    loginStudent
}