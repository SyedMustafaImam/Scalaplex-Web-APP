const joi = require('joi')

let AuthUser= joi.object({
    firstName:joi.string().max(10).required(),
    lastName: joi.string().max(10).required(),
    username: joi.string().email().required(),
    gender: joi.string().required(),
    contact: joi.number().integer().max(11),
    city: joi.string().required(),
    address:joi.string().required(),
    password:joi.string().max(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    tokens: [
        {
            token: { type: String, required: true }
        }
    ]
})
module.exports = {AuthUser};