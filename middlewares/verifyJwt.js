const jwt = require('jsonwebtoken')

const verifyJWT = (req,res,next)=>{
    let authHeader = req.headers['authorization']
    let token = authHeader && authHeader.split(" ")[1]

    if(token == null) return res.sendStatus(401)
    if(!token) return res.sendStatus(403)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        console.log(req.user)
        next()
    })
}

module.exports = verifyJWT