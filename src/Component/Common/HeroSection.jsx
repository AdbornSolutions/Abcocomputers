import React from "react";

const HomeSection = ({
  smallText,
  heading,
  description,
  primaryBtn,
  secondaryBtn,
}) => {
  return (
    <div className="w-full min-h-[110vh] flex flex-col items-center justify-center text-center px-4 text-white relative overflow-hidden bg-[#060B14]">

      {/* 🔥 TOP GLOW (MAIN ELLIPSE) */}
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 
      w-[900px] h-[800px] rounded-full 
      bg-[#2BD7D7] opacity-100 blur-[100px]"></div>

      {/* 🔥 SECOND SOFT GLOW */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 
      w-[500px] h-[500px] rounded-full 
      bg-[#2BD7D7] opacity-30 blur-[200px]"></div>

      {/* 🔥 DARK OVERLAY FOR DEPTH */}
      <div className="absolute inset-0 bg-[#060B14]/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl">

        {/* Small Heading */}
        {smallText && (
          <p className="text-sm mb-3 text-gray-400">
            {smallText}
          </p>
        )}

        {/* Main Heading */}
       <h1 className="font-heading text-[32px] md:text-[48px] leading-tight text-center">
  {heading}
</h1>

        {/* Description */}
        <p className="mt-4 text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3 flex-wrap justify-center">

   {/* PRIMARY BUTTON (SOLID PINK) */}
  <button className="px-5 py-2 rounded-full text-sm text-white
  bg-[#ec4899]/80 backdrop-blur-md
  border border-cyan-300
  shadow-[0_0_15px_rgba(236,72,153,0.3)]
  hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]
  hover:bg-[#ec4899]
  hover:scale-105 transition duration-300">
    {primaryBtn}
  </button>

  {/* SECONDARY BUTTON (Cyan Outline) */}
  {secondaryBtn && (
    <button className="px-5 py-3 rounded-full text-sm text-white
    bg-transparent
    border border-cyan-300
    shadow-[0_0_12px_rgba(0,255,255,0.2)]
    hover:shadow-[0_0_10px_rgba(0,255,255,0.4)]
    hover:bg-cyan-400/10
    hover:scale-105 transition duration-300">
      {secondaryBtn}
    </button>
  )}

</div>

      </div>
    </div>
  );
};

export default HomeSection;