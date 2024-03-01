// import link
import { Link } from 'react-router-dom';
import { useEffect,useRef,useState } from 'react';
import About from './about';
// import relevant images.
import logoImg from '../images/104421ac0b1cf80ab34189a50b618984-removebg-preview.webp'
const NavBar = () => {
    const menuRef=useRef(null);
    const menuIconRef=useRef(null);
    const closeMenuRef=useRef(null);
    
    const handleMenu=()=>{
        if(menuRef.current && menuIconRef.current){
            menuRef.current.style.display="block";
            menuIconRef.current.style.display="none";
            closeMenuRef.current.style.display="block";
        }
    }
    const handleCloseMenu=()=>{
        if(menuRef.current && closeMenuRef.current){
            menuRef.current.style.display="none";
            closeMenuRef.current.style.display="none";
            menuIconRef.current.style.display="block";
        }
    }
useEffect(()=>{
    const menu=menuRef.current;
    const menuIcon=menuIconRef.current;
    const closeMenuIcon=closeMenuRef.current;
},[]);
    return (
        <div class="bg-gradient-to-r from-slate-600 to-black relative z-50 overflow-hidden">
            <div class="block md:flex text-white w-full md:w-[90%] m-auto justify-between  p-3">
                <div class="flex justify-between">
                <div class="flex">
                <img src={logoImg} class="rounded-full w-14 h-14 bg-white" alt="logoImg"></img>
                <h2 class="text-xl font-semibold mt-3 ml-2">Tuongee</h2>
                </div>
                <div class="visible md:invisible">
                <svg ref={menuIconRef} onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                </div>
                </div>
                <div ref={menuRef} class="bg-gray-500 md:bg-gradient-to-r from-gray-800 to-gray-800 rounded-md md:rounded-full">
                    <ul class="block md:flex mt-4 m-auto">
                        <li><Link to="/Home" class="link ml-0 md:ml-2">Home</Link></li>
                        <li><Link to="/About" class="link">About Us</Link></li>
                        <li><a href="#events" class="link">Events</a></li>
                        <li><a href="/Reviews" class="link mr-2 hover:text-yellow-500">Reviews</a></li>
                        <li><a href="#contacts" class="link mr-2 hover:text-yellow-500">Contacts</a></li>
                    </ul>
                </div>
                <div class="visible md:hidden w-[10%] m-auto mt-3">
                <svg ref={closeMenuRef} onClick={handleCloseMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </div>
            </div>
        </div>
    );
}
 
export default NavBar;