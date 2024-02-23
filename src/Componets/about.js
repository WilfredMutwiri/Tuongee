import aboutImg from '../images/323146723_3270424529954290_6679059355864634314_n.webp'
const About = () => {
    return (
       <div class="-mt-10 w-full pt-24 pb-10" id='about'>
       <div class="w-full md:w-11/12 m-auto block md:flex">
       <div>
       <img src={aboutImg}/>
       </div>
       <div class="ml-0 md:ml-10 bg-gray-300 p-5">
         <h2 class="text-xl md:text-2xl pt-3 pb-3 pl-2 font-semibold">About Tuongee</h2>
         <p class="text-normal md:text-lg pt-3">
          Adolescent and young people have various needs on SRHR. Looking back
          to the backgrounds we grew up, it’s clear that many parents and guardians
          are not in position of providing solutions to the SRHR needs of the young people.<br/>
          As a result, tubonge is created to eliminate this gap. This is a platform that you
          can ask anything on SRHR and you will get a reply as soon as possible.             
          </p>
         <button class="p-3 bg-slate-400 rounded-md mt-10 font-semibold text-red-600 text-lg">Join Us</button>
       </div>
       </div>
       </div>
     );
}
 
export default About;