const mongoose=require('mongoose');
// initiate the review model
const Review=require('../models/reviewsModel');
// get all reviews
const getReviews=async(req,res)=>{
    try {
        const reviews=await Review.find({}).sort({createdAt:-1})
        res.status(200).json(reviews)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
// get a single review
const getReview=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such review"})
    }
    const review=await Review.findById(id)
    if(!review){
        return res.status(404).json({error:"No such review"})
    }
    res.status(200).json(review)
}
// create a review
const createReview=async(req,res)=>{
    const {fullName,topic,reviewContent}=req.params;
    try {
        const review=await Review.create({fullName,topic,reviewContent})
        res.status(200).json(review)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
// delete a review
const deleteReview=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such review"})
    }
    const review=await Review.findOneAndDelete({_id:id})
    if(!review){
        return res.status(404).json({error:"No such review"})
    }
    res.status(200).json(review)
}
// update a review
const updateReview=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such review"})
    }
    const review=await Review.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!review){
        return res.status(404).json({error:"No such review"})
    }
    res.status(200).json(review)
}
module.exports={
    getReviews,
    createReview,
    getReview,
    deleteReview,
    updateReview
}
