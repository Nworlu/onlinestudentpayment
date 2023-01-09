const Faculty = require('../model/Faculty')

const createFaculty = async(req,res)=>{
    let { faculty_name, faculty_code } = req.body
    try {
        const newFaculty = new Faculty({
            faculty_name,
            faculty_code
        })
        await Faculty.create(newFaculty)
        res.status(200).json({newFaculty})
    } catch (error) {
        res.status(500).json({error})
    }
    
}

module.exports = {
    createFaculty
}