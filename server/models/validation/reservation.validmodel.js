const joi=require('joi')
let AuthReservation= joi.object({
   movieid:joi.string().lowercase().required(),
   bookedfor:joi.string().email().required()
})
module.exports={AuthReservation}