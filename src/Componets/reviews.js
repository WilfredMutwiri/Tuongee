const reviews = () => {
    return (
        <div class="bg-gradient-to-r from-gray-200 to-gray-400 pb-10 pt-5 w-full p-3 md:p-0"> 
            <h2 class="text-center text-lg ">Leave a review  on one of the topics (fgm,Early marriages,Early pregnancies and Menstrual)</h2>
            <p class="text-center italic text-orange-600">
                let others have a glimpse of what you think!
            </p>
            <div class="w-11/12 m-auto pt-5 pb-5 block md:flex">
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, 
                    maxime explicabo vitae deserunt quia quidem obcaecati optio 
                    eligendi natus ab.
                </p>
            </div>
            <form action="" class="ml-0 md:ml-4 mt-5 md:mt-0">
            <label class="text-lg text-orange-800">Full Name:</label><br/>
            <input class="p-1 rounded-md shadow-sm shadow-orange-600 w-52" type="text" name="" id="" placeholder="e.g John Kamau" /><br/>
            <label class="text-lg text-orange-700">Topic:</label><br/>
            <input class="p-1 rounded-md shadow-sm shadow-orange-600 w-52" type="text" name="" id="" placeholder="FGM" /><br/>
            <label class="text-lg text-orange-700">Review:</label><br/>
            <textarea class="p-1 rounded-md shadow-sm shadow-orange-600 w-full md:w-96" name="" id="" cols="30" rows="10" placeholder="FGM has been ..."></textarea>
            <button class="bg-orange-700 shadow-sm shadow-black hover:bg-black text-white rounded-md p-2 w-40 text-center ml-4 mt-2">Add Review</button>
            </form>
            </div>
        </div>
    );
}
 
export default reviews;