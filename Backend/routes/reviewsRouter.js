// initialize express
const express=require('express');
// import controllers
const{
    getReviews,
    createReview,
    getReview,
    deleteReview,
    updateReview
}=require('../controllers/ReviewsController');
// create router
const router=express.Router();
// get all reviews
router.get('/getReviews',getReviews);
// create review
router.post('/addReview',createReview);
// get a single review
router.get('/:id',getReview);
// delete a single review
router.delete('/:id',deleteReview);
// update a review
router.patch('/:id',updateReview)
module.exports=router;