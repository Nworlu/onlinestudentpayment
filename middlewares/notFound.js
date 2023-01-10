const notFound = (req,res)=>res.status(404).render('error', {error:"route does not exist"})
// .send("Route does not exist")


module.exports = notFound