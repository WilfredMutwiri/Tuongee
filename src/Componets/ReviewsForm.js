import { useState } from "react";
import { useReviewsContext } from "../hooks/useReviewsContext";
const ReviewsForm=()=>{
    // create useState objects
    const {dispatch} =useReviewsContext();
    const [fullName,setFullName]=useState('');
    const [topic,setTopic]=useState('');
    const [reviewContent,setReviewContent]=useState('');
    const [error,setError]=useState('');
    const [emptyFields,setEmptyFields]=useState([]);
    const [isLoading, setIsLoading] = useState(false); // New state for loading
    // handle button submit
    const handleSubmit=async(e)=>{
        // e.preventDefault();
        setIsLoading(true); // Set loading state to true before fetching
        const review={fullName,topic,reviewContent};
        const response =await fetch('/api/reviews',{
            method:"POST",
            body:JSON.stringify(review),
            headers:{
                "content-Type":"application/json",
                "Accept":"application/json"
            }
        });
        setIsLoading(false); // Set loading state to false after fetching
        const json = await response.json();
        if(!response.ok){
            setError("An error occurred while submitting the review.");
            // setError(json.error)
            setEmptyFields(json.emptyFields || []);
            // setEmptyFields(json.emptyFields)
         }
          else {
            try {
              // Parse JSON only once inside the try-catch block
              const json = await response.json();
              setFullName("");
              setTopic("");
              setReviewContent("");
              setEmptyFields([]);
              dispatch({ type: "CREATE_REVIEW", payload: json });
            } catch (error) {
              // Handle potential errors during JSON parsing
              setError("An error occurred while processing the review addition.");
              console.error("Error parsing response JSON:", error);
            }
          };
        
        // if(response.ok){
        //     setFullName('');
        //     setTopic('');
        //     setReviewContent('');
        //     setReviewContent('');
        //     setEmptyFields([]);
        //     dispatch({type:'CREATE_REVIEW',payload:json})
        // }
    }
        return (
            <div className="">
                    {isLoading && <p class="text-lg text-center italic text-red-600">Loading...</p>}
                <form onSubmit={handleSubmit} class=" ml-0 md:ml-14 mt-5 md:mt-0">
                <label class="text-lg text-orange-800">Full Name:</label><br/>
                <input class="p-1 rounded-md shadow-sm shadow-blue-700 w-52"
                onChange={(e)=>setFullName(e.target.value)}
                value={fullName} type="text" placeholder="e.g John Kamau" required /><br/>
                <label class="text-lg text-orange-700">Topic:</label><br/>
                <input class="p-1 rounded-md shadow-sm shadow-blue-700 w-52"
                onChange={(e)=>setTopic(e.target.value)}
                value={topic} type="text" placeholder="FGM" required /><br/>
                <label class="text-lg text-orange-700">Review:</label><br/>
                <textarea class="p-1 rounded-md shadow-sm shadow-blue-700 w-full md:w-96"
                onChange={(e)=>setReviewContent(e.target.value)}
                value={reviewContent}
                cols="30" rows="10" placeholder="FGM has been ..." required></textarea><br/>
                  {/* Conditionally render loading indicator */}
                <p>{error}</p>
                <button class="bg-orange-700 shadow-sm shadow-black hover:bg-black text-white rounded-md p-2 w-40 text-center ml-4 mt-2">Add Review</button>
                </form>
                </div>
        );
    }
export default ReviewsForm;