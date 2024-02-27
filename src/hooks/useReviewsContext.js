import { ReviewsContext } from "../context/reviewsContext";
import { useContext } from "react";

export const useReviewsContext =()=>{
    const context =useContext(ReviewsContext)
    if(!context){
        throw Error('useReviewsContext must be used inside a context provider')
    }
    return context
}