const express = require('express')
const { createDepartment } = require('../controllers/department')
const router = express.Router()


router.get('/', (req,res)=>{
    res.send("Welcome to Veritas due payment system")
})

router.post('/register', createDepartment)



module.exports = router