const express = require('express')
const { createStudent, loginStudent, getLogin } = require('../controllers/student')
const verifyJWT = require('../middlewares/verifyJwt')
const router = express.Router()


router.get('/login', getLogin)

router.post('/register', createStudent);
router.post('/login',loginStudent);


module.exports = router