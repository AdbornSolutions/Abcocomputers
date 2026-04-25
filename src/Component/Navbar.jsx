import React, { useState } from "react";
import logo from "../assets/common-images/abco-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50 flex justify-center mt-4 px-4">
      
      <div className="w-full max-w-6xl flex items-center justify-between">

        {/* LOGO */}
       <Link to="/">
          <img 
            src={logo} 
            alt="logo" 
            className="h-10 md:h-12 object-contain cursor-pointer hover:scale-105 transition"
          />
       </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 px-8 py-4 
          bg-white/10 backdrop-blur-md border border-white/20 
          rounded-full shadow-md text-white text-[18px]">
          
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/services">Services</a>
          <a href="/department">Department</a>
          <a href="/learning">Learning</a>
          <a href="/contactus">Contact us</a>
        </div>

        {/* BUTTON (DESKTOP) */}
        <div className="hidden md:block">
          <button className="px-6 py-3 rounded-full 
            bg-white/10 backdrop-blur-md border border-white/20 
            text-white hover:bg-white/20 transition">
            Book a call
          </button>
        </div>

        {/* HAMBURGER */}
        <div className="md:hidden text-white text-2xl cursor-pointer"
             onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] 
          bg-[#020617]/95 backdrop-blur-md border border-white/20 
          rounded-2xl p-6 flex flex-col gap-5 text-white text-center shadow-lg">

          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/services">Services</a>
          <a href="/department">Department</a>
          <a href="/learning">Learning</a>
          <a href="/contactus">Contact us</a>

          <button className="mt-4 px-6 py-3 rounded-full 
            bg-white text-black hover:bg-white/80 transition">
            Book a call
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;