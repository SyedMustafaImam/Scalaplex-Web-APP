const joi = require('joi')
let AuthMovies = new joi.object({
    movieid:joi.string().lowercase().required(),
    moviename:joi.string().lowercase().required(),
    theaterno:joi.string().required(),
    seats:joi.number().integer().max(65).required(),
    time:joi.string().pattern(new RegExp('([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])\s*([AaPp][Mm])')).required(),
    date:joi.date().required()
})
module.exports={AuthMovies}