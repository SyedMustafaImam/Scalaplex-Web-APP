const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

let Users = new Schema({
    firstName: { type: String, required: true, max: 10 },
    lastName: { type: String, required: true, max: 10 },
    username: { type: String, required: true },
    profession: { type: String, required: true },
    degree: { type: String, required: true },
    department: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },

    tokens: [
        {
            token: { type: String, required: true }
        }
    ]
});
// hashing password
Users.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

// Generating token
Users.methods.generateAuthToken = async function () {
    // console.log('we are at generateAuthToken')
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        // console.log("Here we have the token",token)
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    }
    catch (err) {
        console.log(err)
    }
}
// hashing password
Users.pre('save', async function (next) {
    console.log(`hi from inside hash`)
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        console.log("this is the password",this.password)
    }
    next()
})

// Generating token


module.exports = mongoose.model('Users', Users);