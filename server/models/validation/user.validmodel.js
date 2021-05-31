const joi = require('joi')

let AuthUser= joi.object({
    firstName:joi.string().max(11).required(),
    lastName: joi.string().max(11).required(),
    username: joi.string().email().required(),
    gender: joi.string().required(),
    contact: joi.string().length(11).required(),
    city: joi.string().required(),
    address:joi.string().required(),
    password:joi.string().length(8).pattern(new RegExp('^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$')).required()
})
module.exports = {AuthUser};