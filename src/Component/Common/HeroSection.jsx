import React from "react";

const HomeSection = ({
  smallText,
  heading,
  description,
  primaryBtn,
  secondaryBtn,
  bgImage // 👈 new prop
}) => {
  return (
    <div
      className="w-full min-h-[120vh] flex flex-col items-center justify-center text-center px-4 text-white relative overflow-hidden"
      
  style={{
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
    >

      {/* 🔥 Gradient Overlay */}
      <div className="absolute inset-0 bg-[#020617]/50"></div>

       
      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Small Heading */}
        {smallText && (
          <p className="text-sm mb-3 text-gray-300">
            {smallText}
          </p>
        )}

        {/* Main Heading */}
        <h1 className="font-heading text-[40px] md:text-[48px] leading-tight max-w-3xl">
          {heading}
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-gray-300 text-[18px] font-heading leading-relaxed ">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 flex-wrap justify-center">

      <button className="px-6 py-3 w-44 text-center rounded-full 
  bg-white/10 backdrop-blur-lg 
  border-t border-white/60
  text-white font-heading text-lg 
  shadow-[inset_0_-2px_4px_rgba(255,255,255,0.4),0_8px_32px_rgba(31,38,135,0.37)] 
  hover:bg-white/20 hover:scale-105 
  transition duration-300">
  {primaryBtn}
</button>

          {secondaryBtn && (
            <button
              className="px-6 py-3 w-44 text-center rounded-full 
              bg-white text-black font-heading text-lg 
              border border-white/30 
              hover:bg-white/10 hover:text-white 
              hover:backdrop-blur-md 
              hover:border-white/40 
              hover:scale-105 
              transition duration-300"
            >
              {secondaryBtn}
            </button>
          )}

        </div>

      </div>
    </div>
  );
};

export default HomeSection;