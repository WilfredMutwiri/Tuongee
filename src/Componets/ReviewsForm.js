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
    // handle button submit
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const review={fullName,topic,reviewContent};
        const response =await fetch('/api/reviews',{
            method:"POST",
            body:JSON.stringify(review),
            headers:{
                "content-Type":"application/json"
            }
        })
        const json=await response.json();
        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setFullName('');
            setTopic('');
            setReviewContent('');
            setReviewContent('');
            setEmptyFields([]);
            console.log("New review added");
            dispatch({type:'CREATE_REVIEW',payload:json})
        }
    }
        return (
            <div class="">
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
                <button class="bg-orange-700 shadow-sm shadow-black hover:bg-black text-white rounded-md p-2 w-40 text-center ml-4 mt-2">Add Review</button>
                </form>
                </div>
        );
    }
export default ReviewsForm;