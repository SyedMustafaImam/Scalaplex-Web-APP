const joi = require('joi')
let AuthShowTime = new joi.object({
    moviename:joi.string().required(),
    totalnoseats:joi.string().required(),
    seatsbooked:joi.number().integer().required(),
    time:joi.string().required(),
    date:joi.string().required()
})
module.exports={AuthShowTime}