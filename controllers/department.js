const Department = require('../model/Department')

const createDepartment = async(req,res)=>{
    let { department_name, department_code, faculty_id, price_dues } = req.body
    try {
        const newDepartment = new Department({
            department_name,
            department_code,
            faculty_id,
            price_dues
        })
        await (await Department.create(newDepartment)).populate('faculty_id')
        res.status(200).json({department:newDepartment})
        
    } catch (error) {
        res.status(500).json({error})
        
    }
}

module.exports ={
    createDepartment
}