const Movie=require('../models/movies.model');


exports.movie_create= async function(req,res){
    try{
        let movie=new Movie({
        movieid:req.body.movieid,
        moviename:req.body.moviename,
        theatreno:req.body.theatreno,
        seats:req.body.seats,
        time:req.body.time        
    })

    const movieRegister= await movie.save();
    if(movieRegister){
        res.status(201).send('Movie has been added successfully');
    }
    }catch(err){
        return res.status(400).send('Something went wrong');
    }


}


exports.movie_delete= async function(req,res){
    try{
        await Movie.findByIdAndRemove(req.params.id);
        return res.status(200).send('Movie has been Deleted');
    } catch (err) {
        return res.status(400).send("This Movie does not exist");
    }
    };

exports.movie_update = async function(req,res){
    try{
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id, {$set:req.body});
        return res.status(200).send("Movie has been updated successfully");
    }catch(err){
        return res.status(400).send("This Movie doesn't exist")
    }
}
exports.movie_details = async function (req,res){
    try{
        const movie=await movie.findById(req.params.id);
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