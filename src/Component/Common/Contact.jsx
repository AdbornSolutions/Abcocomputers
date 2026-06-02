import React from "react";

// icons (you can replace with your own images if needed)
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="w-full bg-[#060B14] py-20 px-4 flex justify-center">

      {/* CONTAINER */}
      <div className="w-full max-w-4xl text-center text-white">

        {/* BUTTON */}
        <div className="mb-6">
  <button className="px-8 sm:px-10 py-3 rounded-full font-heading
  text-white text-[17px] sm:text-[20px] tracking-wide
  
  bg-gradient-to-r from-white/10 to-white/5
  backdrop-blur-lg
  
  border-t border-b border-white/50
  
  
  shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_8px_30px_rgba(0,0,0,0.4)]
  
  hover:scale-105 transition duration-300">
    Contact us
  </button>
</div>

        {/* QUOTE */}
        <h2 className="text-[18px] md:text-[34px] font-medium mb-8 leading-relaxed">
          "Don't be afraid to give up the good to go for the great."
        </h2>

        {/* INPUT + ICONS */}
       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

  {/* INPUT FIELD */}
<div className="flex items-center whitespace-nowrap 
bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md
border-l border-r border-white/50 
rounded-full px-6 py-3 
w-full sm:w-[460px]


">
    

    <input
      type="text"
      placeholder="+91 - xxxx-xxx-xxx"
      className="bg-transparent outline-none text-white text-base sm:text-lg w-full min-w-0 placeholder-gray-400"
    />
  </div>

  {/* ICON BUTTONS */}
  <div className="flex gap-3">

    {/* EMAIL */}
    <div className="w-12 h-12 rounded-full 
    bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md
    border-l border-r border-white/50 
    flex items-center justify-center cursor-pointer
    shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_6px_20px_rgba(0,0,0,0.4)]
    hover:bg-white/20 transition">
      <MdEmail className="text-white text-lg" />
    </div>

    {/* WHATSAPP */}
    <div className="w-12 h-12 rounded-full 
    bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md
    border-l border-r border-white/50 
    flex items-center justify-center cursor-pointer
    shadow-[inset_0_2px_4px_rgba(255,255,255,0.2),0_6px_20px_rgba(0,0,0,0.4)]
    hover:bg-white/20 transition">
      <FaWhatsapp className="text-white text-lg" />
    </div>

  </div>

</div>
      </div>
    </div>
  );
};

export default Contact;
