const mongoose=require('mongoose');
// initiate the review model
const Review=require('../models/reviews');
// get reviews
const getReviews=async(req,res)=>{
    try {
        const review=await Review.find({}).sort({createdAt:-1})
        res.status(200).json({review})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
// post review
const createReview=async(req,res)=>{
    const {fullName,topic,review}=req.body;
    try {
        const review=await Review.create({fullName,topic,review})
        res.status(200).json({review})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports={
    getReviews,
    createReview
}
