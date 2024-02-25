const mongoose=require('mongoose');
// initiate schema creation
const Schema=mongoose.Schema;
// create schema
const reviewsSchema=new Schema({
    fullName:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    reviewContent:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('review',reviewsSchema)