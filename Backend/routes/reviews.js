// initialize express
const express=require('express');
// import controllers
const{
    getReviews,
    createReview
}=require('../components/controller');
// create router
const router=express.Router();
// get all reviews
router.get('/',getReviews);
// create review
router.post('/',createReview);

module.exports=router;