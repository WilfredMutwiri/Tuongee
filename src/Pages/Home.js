// import images
import aboutImg from '../images/323146723_3270424529954290_6679059355864634314_n.webp'
import fgmImg from '../images/2c4c3cfefdfa5d6e7afb3452453bb6bc.webp'
import earlyPregnancy from '../images/ac234c0cc52b7375cd965ef8600171d5.webp'
import earlyMarriage from '../images/1707249699031.webp'
import menstrualImg from '../images/347398429_757076996145653_5738827329646544394_n.webp'
import eventImg1 from '../images/WhatsApp Image 2024-02-19 at 9.19.27 AM.webp'
import eventImg2 from '../images/WhatsApp Image 2024-02-19 at 9.19.28 AM.webp'
import eventImg3 from '../images/WhatsApp Image 2024-02-19 at 11.54.34 AM.webp'
import eventImg4 from '../images/WhatsApp Image 2024-02-19 at 9.19.31 AM.webp'
import eventImg5 from '../images/WhatsApp Image 2024-02-19 at 12.01.21 PM.webp'
import eventImg6 from '../images/WhatsApp Image 2024-02-19 at 12.01.22 PM.webp'
import callImg from '../images/347422013_3592481327650889_8719124380261876941_n.webp'
import testiImg1 from '../images/WhatsApp Image 2024-02-22 at 8.48.30 PM.webp'
import testiImg2 from '../images/WhatsApp Image 2024-02-22 at 10.22.51 PM.webp'
import { Link } from 'react-router-dom';
import { useState,useRef } from 'react'
const Home = () => {
// handle image display on events section
const eventRef=useRef(null)
const eventInfoRef =useRef(null)
const eventRef2=useRef(null)
const eventInfoRef2=useRef(null)
const eventRef3=useRef(null)
const eventInfoRef3=useRef(null)
const eventRef4=useRef(null)
const eventInfoRef4=useRef(null)
const eventRef5=useRef(null)
const eventInfoRef5=useRef(null)
const eventRef6=useRef(null)
const eventInfoRef6=useRef(null)
const [isHovered,setIsHovered]=useState(false);
const [isHovered2,setIsHovered2]=useState(false);
const [isHovered3,setIsHovered3]=useState(false);
const [isHovered4,setIsHovered4]=useState(false);
const [isHovered5,setIsHovered5]=useState(false);
const [isHovered6,setIsHovered6]=useState(false);
// Tstimonial Changes
const [text,setText]=useState('"Through Tubonge initiative, I have been training and equipped with excellent knowledge on matters SRHR which involves the right to choose whether,when,and with who to engage with in sexual  activity. The phenomenal training has enabled youths from Tharaka Nithi county to understand the importance of sexual reproductive information and the significance of enjoying safe sex.Tharaka community has benefited much from the teaching and as for the youths who attended the training have been transformed and most of then I included, we have decided to act as change agent in our community"');
const [testimoner,setTestimoner]=useState('Caroline Kinya');
const [testiTitle,setTestiTitle]=useState('Trainee');
const [testiImg,setTestiImg]=useState(testiImg1);
let testCount=0;
let testimonerCount=0;
let testiTitleCount=0;
let testiImgCount=0;
const testimonies=[
  '"Through Tubonge initiative, I have been training and equipped with excellent knowledge on matters SRHR which involves the right to choose whether,when,and with who to engage with in sexual  activity. The phenomenal training has enabled youths from Tharaka Nithi county to understand the importance of sexual reproductive information and the significance of enjoying safe sex.Tharaka community has benefited much from the teaching and as for the youths who attended the training have been transformed and most of then I included, we have decided to act as change agent in our community"',
  '"Thanks to Tuongee training, I\'ve gained valuable knowledge about my rights, the negative impacts of teenage pregnancy, FGM, and early marriages, and even how to end harmful practices like FGM and report them to the authorities. Now, I\'m empowered to become an advocate, educating both youth and the community about their rights and the dangers of harmful practices. I\'ll raise awareness about the negative consequences of FGM, teenage pregnancy, and early marriage, and even challenge ingrained cultural beliefs that perpetuate these harmful traditions. By sharing my knowledge and encouraging others to take action, I hope to create a more informed and empowered community."',
]
const testimoners=['Caroline Kinya','Mugao Lucyline Muthoni']
const testimonerTitle=['Trainee','Trained Individual']
const testimonerImg=[testiImg1,testiImg2]
const handleBackTesti =()=>{
  setText(testimonies[testCount])
  setTestimoner(testimoners[testimonerCount])
  setTestiTitle(testimonerTitle[testiTitleCount])
  setTestiImg(testimonerImg[testiImgCount])
  testiTitleCount++;
  testimonerCount++;
  testiImgCount++;
  testCount++;
}
const handleForwardTesti =()=>{
  setText(testimonies[testCount]);
  setTestimoner(testimoners[testimonerCount]);
  setTestiTitle(testimonerTitle[testiTitleCount]);
  setTestiImg(testimonerImg[testiImgCount]);
  testCount--;
  testimonerCount--;
  testiTitleCount--;
  testiImgCount--;
  if(testCount===-1 && testimonerCount===-1 && testiTitleCount===-1){
    testCount=0;
    testimonerCount=0;
    testiTitleCount=0;
    testiImgCount=0;
  };
}
// first event image
const handleMouseEnter=()=>{
  setIsHovered(true);
  if(eventRef.current && eventInfoRef.current){
    eventRef.current.style.display="block"
  }
  };
const handleMouseLeave =()=>{
  setIsHovered(false);
  if(eventRef.current && eventInfoRef.current){
    eventRef.current.style.display="block"
  };
  };
  // second event image
  const handleMouseEnter2=()=>{
    setIsHovered2(true);
    if(eventRef2.current && eventInfoRef2){
      eventRef2.current.style.display="block"
    }
  };
  const handleMouseLeave2=()=>{
    setIsHovered2(false);
    if(eventRef2.current && eventInfoRef2){
      eventRef2.current.style.display="none"
    }
  }
    // third event image
    const handleMouseEnter3=()=>{
      setIsHovered3(true);
      if(eventRef3.current && eventInfoRef2){
        eventRef3.current.style.display="block"
      }
    };
    const handleMouseLeave3=()=>{
      setIsHovered3(false);
      if(eventRef3.current && eventInfoRef2){
        eventRef3.current.style.display="none"
      }
    }
    // fourth event image
    const handleMouseEnter4=()=>{
      setIsHovered4(true);
      if(eventRef4.current && eventInfoRef4){
        eventRef4.current.style.display="block"
      }
    };
    const handleMouseLeave4=()=>{
      setIsHovered4(false);
      if(eventRef4.current && eventInfoRef4){
        eventRef4.current.style.display="none"
      }
    }
        // fifth event image
        const handleMouseEnter5=()=>{
          setIsHovered5(true);
          if(eventRef5.current && eventInfoRef5){
            eventRef5.current.style.display="block"
          }
        };
        const handleMouseLeave5=()=>{
          setIsHovered5(false);
          if(eventRef5.current && eventInfoRef5){
            eventRef5.current.style.display="none"
          }
        }
            //sixth event image
    const handleMouseEnter6=()=>{
      setIsHovered6(true);
      if(eventRef6.current && eventInfoRef6){
        eventRef6.current.style.display="block"
      }
    };
    const handleMouseLeave6=()=>{
      setIsHovered6(false);
      if(eventRef6.current && eventInfoRef6){
        eventRef6.current.style.display="none"
      }
    }
    return (
     // home section
     <div class="bg-gray-100 overflow-hidden" id='home'>
         <div className='bg'>
         <div class="mt-32 md:mt-0 absolute inset-0 items-center justify-center overflow-hidden">
         <div class="m-auto w-full md:w-9/12 pt-36 md:pt-44 p-10 font-sans">
         <h2 class="text-white text-4xl md:text-6xl font-bold"><span class="text-red-600 text-2xl md:text-4xl font-bold">Let's Talk</span><br></br>About Sexual Reproductive Health Rights!</h2>
         <p class="text-white text-lg md:text-xl pt-8">
          Over 50,000 sexual abuse cases are reported annually.<br></br>
          <em>20% of these cases are caused by ignorance and lack of information to the victims.</em>
         </p>
         <div class=" w-80 mt-6 md:mt-12 m-auto">
          <button class="homeBtn"><Link to="/about">Learn More</Link></button>
          <button class="homeBtn"><a href="#contacts">Let's Chat</a></button>
         </div>
         </div>
         </div>
        </div>
        <div class="w-11/12 md:w-6/12 m-auto bg-black h-auto text-white pt-6 p-3 -mt-6 md:-mt-7 shadow-md shadow-white text-sm md:text-lg rounded-sm">
        <ul class="flex justify-between">
          <li>Members<br></br><span class="text-red-600">200+</span></li>
          <li>Benefited Youth<br></br><span class="text-red-600">5000+</span></li>
          <li>Current Programs<br></br><span class="text-red-600">100+</span></li>
        </ul>
        </div>
        {/* home section */}
        {/* about section */}
        <div className='reveal' class="-mt-10 w-full pt-24 "id='about'>
        <div class="w-full md:w-11/12 m-auto block md:flex">
        <div>
        <img src={aboutImg} alt='aboutImg'/>
        </div>
        <div class="ml-0 md:ml-10 bg-gray-300 p-5">
          <h2 class="text-xl md:text-2xl pt-3 pb-3 pl-2 font-semibold">About Tuongee</h2>
          <p class="text-normal md:text-lg pt-3">
          Adolescent and young people have various needs on SRHR. Looking back
          to the backgrounds we grew up, it’s clear that many parents and guardians
          are not in position of providing solutions to the SRHR needs of the young people.<br/>
          As a result, tubonge is create to eliminate this gap. This is a platform that you
          can ask anything on SRHR and you will get a reply as soon as possible.             
          </p>
          <button class="p-2 bg-slate-400 rounded-md mt-10 font-semibold text-red-600 hover:text-white hover:bg-black">Join Us</button>
        </div>
        </div>
        </div>
        {/* fgm section */}
        <div class="w-full pt-10 mt-32 bg-gradient-to-r from-gray-400 to-gray-200 pb-28 pt-10clear" id='fgm'>
        <h1 class="text-center text-xl font-light"><span class="text-yellow-500 font-bold">~</span>We Enlighten on:</h1>
        <div class="w-11/12 pt-10 block md:flex m-auto">
        <div class="mr-10 bg-gray-200 p-3 w-full md:w-[60%] shadow-lg shadow-black">
        <h2 class="text-xl md:text-2xl pt-3 pb-3 pl-2 font-semibold">Female Genital Mutilation-FGM</h2>
          <p class="text-normal md:text-lg pt-3">
          FGM was built on misconceptions and they have been passed from one generation
          to another for many decades.<br/> It’s time to wake up and break this circle otherwise
          our sisters, daughters and granddaughters will continue undergoing this activity
          which is a violation of their human rights. 
          </p>
          <Link to="/fgm"><button class="p-2 bg-slate-400 rounded-md mt-10 font-semibold text-red-600 hover:text-white hover:bg-black">Learn More</button></Link>
        </div>
        <div class="mt-7 md:mt-0">
          <img src={fgmImg} alt='fgmImg'/>
        </div>
        </div>
        <hr class="mt-16 w-64 md:w-96  m-auto"/>
        {/* early pregnancy section */}
        <div class="pb-5 w-full pt-5" id='earlyPregnancy'>
        <div class="w-11/12 pt-10 block md:flex m-auto">
        <div>
          <img src={earlyPregnancy} alt='earlyPregnancyImg'/>
        </div>
        <div class="pt-10 md:pt-0 ml-0 md:ml-10 bg-gray-200 p-3 w-full md:w-[70%] shadow-lg shadow-black">
        <h2 class="text-xl md:text-2xl pt-3 pb-3 pl-2 font-semibold">Early Pregnancies</h2>
          <p class="text-normal md:text-lg pt-3">
          It is estimated that in the low and middle income countries there 
          are 21 million pregnancies each year of which 50% are unintended. 
          These pregnancies occur to adolescent ladies between the age of 15-19
          years old. Most of these pregnancies ends into unsafe abortion.<br/>
          From the statistics it’s clear that adolescent pregnancies are a global
          issue though it mostly occurs in poorer and marginalised communities ...
          </p>
          <Link to="/EarlyPregnancies"><button class="p-2 bg-slate-400 rounded-md mt-10 font-semibold text-red-600 hover:text-white hover:bg-black">Learn More</button></Link>
        </div>
        </div>
        </div>
        <hr class="mt-16 w-64 md:w-96  m-auto"/>
        {/* early marriages */}
        <div  class="w-full pt-5 pb-5" id='earlyMarriages'>
        <div class="w-11/12 pt-10 block md:flex m-auto">
        <div class="pt-10 md: pt-0ml-0 md:mr-10 bg-gray-300 p-3 w-full shadow-lg shadow-black">
        <h2 class="text-xl md:text-2xl pt-3 pb-3 pl-2 font-semibold">Early Marriages</h2>
          <p class="text-normal md:text-lg pt-3">
          I have grown up in a community where child marriages are a common thing.
          In most cases these marriages are as a result of unintended pregnancy
          and pressure of the ladies to prove their fertility.<br/> Most of these
          marriages come to an end within very short period due to continued violence
          within the marriage.
          </p>
          <Link to="/EarlyMarriages"><button class="p-2 bg-slate-400 rounded-md mt-10 font-semibold text-red-600 hover:text-white hover:bg-black">Learn More</button></Link>
        </div>
        <div class="mt-5 md:mt-0">
          <img src={earlyMarriage} alt='earlyMarriagesImg'/>
        </div>
        </div>
        </div>
        <hr class="mt-16 w-64 md:w-96  m-auto"/>
        {/* early marriages */}
         {/* menstrual section */}
         <div  class="w-full pt-5 pb-5" id='menstrual'>
        <div class="w-11/12 pt-10 block md:flex m-auto">
        <div>
        <img src={menstrualImg} alt='mentrualImg'/>
        </div>
        <div  class="pt-10 md: pt-0ml-0 md:ml-10 bg-gray-300 p-3 w-full shadow-lg shadow-black">
        <h2 class="text-xl md:text-2xl pt-3 pb-3 pl-2 font-semibold">Menstrual Enlightment</h2>
          <p class="text-normal md:text-lg pt-3">
          In most cases gender inequality, cultural taboo and poverty are the major obstacles
          towards meeting the menstrual health. In most of the sub-sahara countries and low
          economic countries cultural taboos are very common.This makes it hard for parents
          and guardian to share information on menstrual hygiene to their kids. 
          </p>
          <Link to="/Menstrual"><button class="p-2 bg-slate-400 rounded-md mt-10 font-semibold text-red-600 hover:text-white hover:bg-black">Learn More</button></Link>
        </div>
        </div>
        </div>
        </div>
        {/* events section */}
        <hr class="mt-16 w-96  m-auto"/>
        <div class="bg-gradient-to-r from-black to-purple-950 pt-10 pb-10" id='events'>
        <h2 class="text-yellow-600 text-xl text-center pb-5"><span class="text-white">~</span> Featured Events <span class="text-white">~</span></h2>
        <div class="block md:grid grid-cols-3 w-11/12 m-auto" id='eventGrid1'>
        <div id="event" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={eventImg4} alt='eventImg 1'/>
        {/* first useEffect hook */}
        {isHovered &&
        <div ref={eventRef} class='text-white bg-gray-700 p-3 z-50 relative'>
        <p ref={eventInfoRef} class="leading-relaxed">
          Training youths of St. Patrick Catholic Church Gatunga on the National
          and county government government policies of Sexual Reproductive Health
          Rights-SRHR
        </p>
        </div>
        }
        </div>
        <div id="event"  onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
          <img src={eventImg2} alt='eventImg'/>
          {/* second useEffect hook */}
          {
            isHovered2 &&
            <div ref={eventRef2} class='text-white bg-gray-700 p-3 z-50 relative'>
            <p ref={eventInfoRef2}>
              Training various church leaders and community mobilizer on the 
              various policies on FGM, Child Marriages and other Sexual Reproductive
              Health Rights-SRHR 
            </p>
        </div>
          }
        </div>
        <div id="event" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
          <img src={eventImg1} alt='eventImg'/>
          {/* third useEffect hook */}
          {
          isHovered3 &&
          <div ref={eventRef2} class='text-white bg-gray-700 p-3 z-50 relative'>
          <p ref={eventInfoRef3}>
          Joel training adolescent youths from 15-17 years on their development stages
          and the moral upkeep towards behavior change, advocacy and fundamental rights
          reserved for them by the national and county government policies.
        </p>
            </div>
          }
        </div>
        </div>
        <div class="block md:grid grid-cols-3 mt-10 w-11/12 m-auto">
        <div id="event" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
          <img src={eventImg3} alt='eventImg'/>
          {/* fourth useEffect hook */}
          {
            isHovered4 &&
            <div ref={eventRef4} class='text-white bg-gray-700 p-3 z-50 relative'>
            <p ref={eventInfoRef4}>
            Attending a consultative meeting on the actualization
            of the Tharakanithi County Act FGM Act of 2021
            </p>
            </div>
          }
        </div>
        <div id="event" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
          <img src={eventImg5} alt='eventImg'/>
          {/* fifth useEffect hook */}
          {
            isHovered5 &&
            <div ref={eventRef5} class='text-white bg-gray-700 p-3 z-50 relative'>
            <p ref={eventInfoRef5}>
            Representing wake and Shine SHG in a partnership meeting with Plan International
            which was aimed at coming up with an action plan on how to
            implement Break Free Project
            </p>
            </div>
          }
        </div>
        <div id="event" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
          <img src={eventImg6} alt='eventImg'/>
          {/* sixth useEffect hook */}
          {
            isHovered6 &&
            <div ref={eventRef6} class='text-white bg-gray-700 p-3 z-50 relative'>
            <p ref={eventInfoRef6}>
            Having a consultative meeting with pastors and Church elders on
            how to effectively deliver SRHR related information in churches
            and the community
            </p>
            </div>
          }
        </div>
        </div>
        </div>
        {/* testimonial section */}
        <section id='testimonial'>
        <div class="bg-gray-950 pt-20 pb-20 w-full text-white">
        <h2 class="text-center text-xl text-orange-500 pb-5">~ What our Trainees and Trained individuals have to say ~</h2>
        <div class="w-10/12 m-auto bg-gray-50 rounded-md p-5 shadow-sm shadow-orange-500 text-black">
        <h2 class="text-lg">{testimoner}<br/><span class="text-orange-700">{testiTitle}</span></h2>
        <div class="block md:flex">
        <img class="w-56 mr-10 rounded-full shadow-md shadow-orange-500 mb-4 md:mb-0" src={testiImg}/>
        <p class="italic pb-4">
        {text}
        </p>
        </div>
        </div>
        <div class="flex m-auto w-56 justify-between -mt-6">
        <svg onClick={handleBackTesti} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-800 hover:text-red-600 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <svg onClick={handleForwardTesti} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-800 hover:text-red-600 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </div>
        </div>
        </section>
        <section>
          {/* call us section */}
          <div class="w-full bg-gradient-to-r from-yellow-700 to-gray-50 pt-10" id="contacts">
          <div class="block md:flex w-11/12 pt-5 pb-5 m-auto">
          <div>
            <img src={callImg}/>
          </div>
          <div class="ml-0 md:ml-10 pt-3">
            <p class="text-lg">
              Do you have any issue concerning FGM, Early marriages, Early pregnancy or Menstrual 
              Enlightment? Worry less, we are always there for you!.<br/>
              <span class="text-xl text-font-bold text-blue-950 md:text-blue-900">Reach out to us Today!</span>
            </p>
            <form action="">
              <label htmlFor="">First Name</label><br/>
              <input type="text" placeholder='e.g John' required class="p-1 rounded-md" /><br/>
              <label htmlFor="">Last Name</label><br/>
              <input type="text" placeholder='e.g Kamau' required  class="p-1 rounded-md"/><br/>
              <textarea name="" id="" cols="30" rows="10" placeholder='Hello Tuongee...' class="rounded-md mt-4 p-2 w-auto md:w-96 shadow-md shadow-black"></textarea><br/>
              <button class="bg-slate-500 p-2 w-28 mt-2 ml-0 md:ml-3 rounded-md text-white text-lg shadow-sm shadow-black hover:bg-black">Submit</button>
            </form>
          </div>
          </div>
          </div>
        </section>
        </div>
     );
}
 
export default Home;