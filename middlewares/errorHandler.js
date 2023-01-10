const errorHandler = (err,req,res,next)=>{
    res.status(500)
    res.render('error', {msg: err.message})
}

module.exports = errorHandler