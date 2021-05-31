const db = require('../models/index')

exports.create_showtime = (req, res) => {
    console.log('we got >>', req.body)
    let showtime = new db.Showtime({
        moviename:req.body.moviename,
        totalnoseats:req.body.totalnoseats,
        seatsbooked: [],
        time: req.body.time,
        date: req.body.date
    })
    showtime.save().then(result=>{
        console.log(result)
        let reservation=new db.Reservation({
            moviename:req.body.moviename,
            bookedfor:[]
        })
        reservation.save().then(result=>{
            console.log(result)
            res.status(201).json({message:"Created And Placed the Booked table"})
        }).catch(err=>{
            console.log(err)
            res.status(500).json({error:"Something Went wrong"})
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json({error:"Something went wrong"})
    })
    
}