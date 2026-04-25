/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/common-images/abco-logo.png";

const Navbar = () => {
  return (
  <div className="w-full fixed top-0 left-0 z-50 flex justify-center mt-4">

  <div className="w-[92%] max-w-6xl flex items-center justify-center gap-8">

    {/* LOGO */}
    <div>
      <img src={logo} alt="logo" className="h-12 object-contain" />
    </div>

    {/* MENU */}
    <div className="flex items-center gap-8 px-8 py-4 
      bg-white/10 backdrop-blur-md border border-white/20 
      rounded-full shadow-md 
      text-white text-center"
      style={{
        fontFamily: 'Merriweather',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '100%',
        letterSpacing: '0%'
      }}>

      <a href="#">Home</a>
      <a href="#">About us</a>
      <a href="#">Services</a>
      <a href="#">Departments</a>
      <a href="#">Learning</a>
      <a href="#">Contact</a>
    </div>

    {/* BUTTON */}
    <div>
      <button className="px-6 py-4 rounded-full 
  bg-white/10 backdrop-blur-md border border-white/20 
  text-white text-center
  hover:bg-white/20 transition"
  style={{
    fontFamily: 'Merriweather',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '20px',
    lineHeight: '100%',
    letterSpacing: '0%'
  }}>
  Book a call
</button>
    </div>

  </div>
</div>
  );
};

export default Navbar;