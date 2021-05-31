const joi = require('joi')
let AuthMovies = new joi.object({
    movieid:joi.string().lowercase().required(),
    moviename:joi.string().lowercase().required(),
    theaterno:joi.string().required(),
    seats:joi.number().integer().max(65).required(),
    time:joi.string().regex('/^([0-9]{2})\:([0-9]{2})$/').required(),
    date:joi.date().required()
})
module.exports={AuthMovies}