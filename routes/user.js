const express = require('express')
const { createStudent, loginStudent } = require('../controllers/student')
const verifyJWT = require('../middlewares/verifyJwt')
const router = express.Router()


router.get('/', verifyJWT,(req,res)=>{
    res.send("Welcome to Veritas due payment system")
})

router.post('/register', createStudent);
router.post('/login',loginStudent);


module.exports = router