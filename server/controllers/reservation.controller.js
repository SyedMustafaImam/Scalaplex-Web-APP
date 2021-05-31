const db =require('../models/index');

exports.book_seat= async function(req,res){
    var seats;
    try{
    console.log('we have>>',req.body)
    await db.Showtime.findOne({moviename:req.body.moviename}).then(result=>{
        console.log(result.totalnoseats)
        seats=result.totalnoseats
    }).catch(err=>{
        console.log(err)
        res.status(500).json({error:"Something Went Wrong"})
    })
    console.log(seats)
    if(seats!=0){
        await db.Showtime.findOneAndUpdate({moviename:req.body.moviename},{$push:{seatsbooked:req.body.seatno},$set:{totalnoseats:seats-1}})
        .then(result=>{
            console.log(result)
            res.status(201).json({message:"Created Showtime"})
        }).catch(err=>{
            console.log(err)
            res.status(500).json({error:"Something Went Wrong"})
        })
        await db.Reservation.findOneAndUpdate({moviename:req.body.moviename},{$push:{bookedfor:req.body.bookedfor}})
        .then(result=>{
            console.log(result)
            res.status(201).json({message:"Created Showtime"})
        }).catch(err=>{
            console.log(err)
            res.status(500).json({error:"Something Went Wrong"})
        })
    }
    else{
        console.log('Housefull')
    }
}catch(err){
    console.log(err)
}
}

exports.reservation_delete= async function(req,res){
    try{
        await Reservation.findByIdAndRemove(req.params.id);
        return res.status(200).send('Your reservation has been ended');
    } catch (err) {
        return res.status(400).send("Your reservation doesnot exist");
    }
    };

exports.reservation_update = async function(req,res){
    try{
        const updateReservation = await Reservation.findByIdAndUpdate(req.params.id, {$set:req.body});
        return res.status(200).send("Your reservation has been updated successfully");
    }catch(err){
        return res.status(400).send("Your reservation doesnot exist")
    }
}
exports.reservation_details = async function (req,res){
    try{
        const reservation=await Reservation.findById(req.params.id);
        res.status(200).send(reservation);
    }catch(err){
        return res.status(400).send("Your reservation doesnot exist in our record");
    }

}

exports.reservation_list=function(req,res){
    db.Reservation.find()
    .then(result=>{
        console.log(result)
        res.status(200).json({message:"Working"})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"Something Went Wrong"})
    })
};