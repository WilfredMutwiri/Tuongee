import { SERVER_URL } from "../constants";
import { useReviewsContext } from "../hooks/useReviewsContext"
const ReviewDetails=({review})=>{
    const {dispatch}=useReviewsContext();
    const handleClick = async() =>{
        const AdminPassword="!joelm@29x";
        const password=prompt("Enter Admin password to delete a review:")
        if(password==AdminPassword){
            const response =await fetch(SERVER_URL+'/api/reviews/'+review._id,{
                method:"DELETE"
            })
            const json=await response.json()
    
            if(response.ok){
                dispatch({type:'DELETE_REVIEW',payload:json})
            }
        }
        else if (AdminPassword!==password){
            alert("Wrong password.Kindly consult the Admin to proceed!")
        }
    }

return(
    <div class="bg-gray-50 rounded-md p-4 relative mb-5 w-full shadow-sm shadow-blue-700">
        <h2 class="text-lg text-orange-700 font-font-semibold">Name: {review.fullName}</h2>
        <h3 class="text-orange-700 font-font-semibold">Topic: <span class="text-blue-700">{review.topic}</span></h3>
        <p class="text-orange-700 font-font-semibold">Date: <span class="text-red-500">{review.createdAt}</span></p>
        <p class="pt-3">{review.reviewContent}</p>
        <p class="bg-gradient-to-r from-purple-900 to-orange-700 w-16 p-1 mt-5 rounded-md text-white shadow-md shadow-black cursor-pointer text-center" onClick={handleClick}>Delete</p>
    </div>
)
}
export default ReviewDetails