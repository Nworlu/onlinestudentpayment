const express = require('express')
const { createFaculty } = require('../controllers/faculty')
const Faculty = require('../model/Faculty')
const router = express.Router()


router.get('/', (req,res)=>{
    res.send("Welcome to Veritas due payment system")
})

router.post('/register', createFaculty)




module.exports = router