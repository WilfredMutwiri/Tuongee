import logoImg from '../images/104421ac0b1cf80ab34189a50b618984-removebg-preview.webp'
import FbLogo from '../images/facebook-1-svgrepo-com.svg'
import linkedInLogo from '../images/linkedin-icon-svgrepo-com.svg'
import IgLogo from '../images/instagram-1-svgrepo-com.svg'
import whatsappLogo from '../images/whatsapp-svgrepo-com.svg'
import wakeandShineLogo from '../images/wakeandshine.webp'
import planInterLogo from '../images/planInternational.webp'
import { Link } from 'react-router-dom';
const Footer = () => {
    return ( 
        <div id="footer">
        <div class="w-full p-5 bg-gradient-to-r from-gray-950 to-black pt-14 pb-10">
        <div class="w-10/12 m-auto block md:flex justify-between">
        <div class="mb-4" id='title'>
        <img src={logoImg} class="rounded-full w-14 h-14 bg-white" alt="logoImg"></img>
        <h2 class="text-xl font-semibold mt-3 text-white">Tuongee</h2>
        <p class="text-yellow-500 italic text-sm">Elighting the society</p>
        <div class="flex pt-4">
        <a href='https://www.facebook.com/joel.kibara.7' target='_blank'><img id='socialIcon' src={FbLogo}/></a>
        <Link><img id='socialIcon' src={IgLogo}/></Link>
        <a href='https://www.linkedin.com/in/joel-munene-21894918a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><img id='socialIcon' src={linkedInLogo}/></a>
        <Link><img id='socialIcon' src={whatsappLogo}/></Link>
        </div>
        </div>
        <div class="mb-5 md:mb-0">
            <h2 class="text-white text-lg md:text-xl">Our Sponsers</h2>
            <div>
            <img class='w-24 md:w-28 mt-2' src={wakeandShineLogo}/>
            <img class='w-24 md:w-28 mt-4' src={planInterLogo}/>
            </div>
        </div>
        <div class="mb-5 md:mb-0">
            <h2 class="text-white text-lg md:text-xl">Important Links</h2>
            <div class="">
                    <ul class="text-gray-100 text-normal md:text-lg">
                        <li><Link to="/Home" class="link">Home</Link></li>
                        <li><Link to="/About" class="link">About Us</Link></li>
                        <li><a href="#events" class="link">Events</a></li>
                        <li><Link to="" class="link">Contacts</Link></li>
                    </ul>
                </div>
        </div>
        <div id='contacts'>
        <h2 class="text-lg md:text-xl text-white pb-3">Get In Touch</h2>
        <div class="flex text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        <p class="text-normal md:text-lg">
        Kathandeni,<br/>Tharaka-South District,<br/>Tharaka-Nithi County,<br/>Kenya
        </p>
        </div>
        <div class="flex pt-3 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-700 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        <p class="text-normal md:text-lg">
        +254 714 938280
        </p>
        </div>
        <div class="text-white pt-3 flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-pink-600 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <p class="text-normal md:text-lg">
            Tuongee@gmail.com
        </p>
        </div>
        </div>
        </div>
        <hr class="mt-5"/>
        <div class="w-full md:w-96 m-auto mt-5 text-red-600">
        <p class="text-center">
            &copy;Tuongee. 2024 All rights reserved.
        </p>
        </div>
        </div>
        </div>
     );
}
 
export default Footer;