import { useEffect} from "react";
import ReviewDetails from "./ReviewDetails";
import ReviewsForm from "./ReviewsForm";
import { useReviewsContext } from "../hooks/useReviewsContext";
import { SERVER_URL } from "../constants";
const Reviews = () => {
    const {reviews,dispatch}=useReviewsContext()
    useEffect(()=>{
        const fetchReviews=async()=>{
            const response=await fetch(SERVER_URL+'/api/reviews')
            console.log(response.status)
            const json=await response.json()
            if(response.ok){
                dispatch({type:'SET_REVIEWS',payload:json})
            }
        }
        try {
            fetchReviews() 
        } catch (error) {
            alert("Failed to load previous reviews!")
        }
    },[])
    return (
        <div class="bg-gradient-to-r from-gray-200 to-gray-400 pb-10 pt-5 w-full p-3 md:p-0">
        <h2 class="text-center text-lg pt-5">Leave a review  on one of the topics (fgm,Early marriages,Early pregnancies and Menstrual)</h2>
        <p class="text-center italic text-orange-600">
        let others have a glimpse of what you think!
        </p>
           <div class="block md:flex w-11/12 m-auto justify-between pt-5 pb-5">
            <div>
            {reviews && reviews.map((review)=>(
                <ReviewDetails key={review._id} review={review}/>
            ))}
            </div>
            <div>
                <ReviewsForm/>
            </div>
        </div>
        </div>
    );
}
 
export default Reviews;
