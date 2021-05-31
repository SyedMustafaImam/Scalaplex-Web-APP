const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let Movies = new Schema({
    movieid:{type:String,required:true},
    moviename:{type:String,required:true},
    theaterno:{type:String,required:true},
    seats:{type:Number,required:true},
    time:{type:String,required:true},
    date:{type:String,required:true}
})
module.exports = mongoose.model('Movie',Movies);