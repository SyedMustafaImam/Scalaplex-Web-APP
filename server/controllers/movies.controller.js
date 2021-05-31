const db=require('../models/index');
exports.movie_create= function(req,res){
    console.log('we are movie create')
    console.log(req.body)
        let movie=new db.Movies({
        movieid:req.body.movieid,
        moviename:req.body.moviename,
        theaterno:req.body.theaterno,
        seats:req.body.seats,
        time:req.body.time,
        date:req.body.date
    })
    movie.save().then(result=>{
        console.log('Saved>>',result)
    }).catch(err=>console.log(err))
}


exports.movie_delete= async function(req,res){
    try{
        await db.Movies.findByIdAndRemove(req.params.id);
        return res.status(200).send('Movie has been Deleted');
    } catch (err) {
        return res.status(400).send("This Movie does not exist");
    }
    };

exports.movie_update = async function(req,res){
    try{
        const updateMovie = await db.Movies.findByIdAndUpdate(req.params.id, {$set:req.body});
        return res.status(200).send("Movie has been updated successfully");
    }catch(err){
        return res.status(400).send("This Movie doesn't exist")
    }
}
exports.movie_details = async function (req,res){
    try{
        const movie=await db.Movies.findById(req.params.id);
        res.status(200).send(movie);
    }catch(err){
        return res.status(400).send("This Movie does not exist in our record");
    }

}

exports.movie_list=function(req,res){
    Book.find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, movies) {
        if (err) throw err;
        console.log(movies);
        db.close();
      });
};