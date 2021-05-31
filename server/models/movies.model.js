const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let Movies = new Schema({
    movieid:{type:Number,required:true},
    moviename:{type:String,required:true},
    theaterno:{type:String,required:true},
    seats:{type:String,required:true},
    time:{type:String,required:true},
    date:{type:Date,default:Date.now}


})
module.exports = mongoose.model('Movie',Movies);