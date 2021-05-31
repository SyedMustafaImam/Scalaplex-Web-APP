const { AuthMovies }=require('./users.vallidatescheme')
exports.validating=async function(req,res,next){
    const get={
        movieid:req.body.movieid,
        theaterno:req.body.theaterno,
        seats:req.body.seats,
        time:req.body.time,
        date:req.body.date
        }
    try{
        const result=await AuthMovies.validateAsync(get)
        console.log(get)
        console.log(result)
        next()
    }
    catch(err){
        if(err.isJoi===true) err.status=422
        console.log("there has been an error Credentials are not correct:",err)
        res.send(err)
        next(err)
    }
    
}