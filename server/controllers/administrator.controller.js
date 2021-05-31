const db=require('../models/index')
exports.create_admin=(req,res)=>{
    console.log('We got >>',res.body)
    let administrator=new db.Administer({
        username:req.body.username,
        password:req.body.password,
        status:req.body.status
    })
    administrator.save()
    .then(result=>{
        console.log(result)
        res.status(200).json({message:"Working on Admin"})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Something Went Wrong"})
    })
}
exports.list_admin=(req,res)=>{
    db.Administer.find()
    .then(result=>{
        console.log(result)
        res.status(200).json({message:"Working Properly"})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:"Something Went Wrong"})
    })
}
exports.delete_admin=(req,res)=>{
    console.log('We are deleting now',req.body)
    var ar=[ "smustafa086@gmail.com", "davi@gmail.com"]
    try{
     ar.forEach(element => {
        console.log(element)
         db.Administer.findOneAndDelete({username:element})
         .then(result=>{
             console.log("deleted",result)
             res.status(200).json({message:"Deleted"})
         }).catch(err=>{
             console.log(err)
             res.status(500).json({error:"Something Went Wrong"})
         })
     });
    }catch(err){
        console.log(err)
    }
}