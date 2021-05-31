const joi=require('joi')
let AuthReservation= joi.object({
   movieid:joi.string().lowercase().required(),
   bookedfor:joi.array().items(joi.string())
})
module.exports={AuthReservation}