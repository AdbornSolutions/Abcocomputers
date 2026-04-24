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
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 text-white relative"
      
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* 🔥 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/70 via-[#0f1c2e]/60 to-[#020617]/70"></div>

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
        <p className="mt-4 max-w-2xl text-gray-300 text-[18px] font-body">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 flex-wrap justify-center">

          {primaryBtn && (
            <button className="px-6 py-3 rounded-full 
              bg-gradient-to-r from-purple-500 to-pink-500 
              text-white font-body text-sm">
              {primaryBtn}
            </button>
          )}

          {secondaryBtn && (
            <button className="px-6 py-3 rounded-full 
              border border-white/30 text-white font-body text-sm 
              hover:bg-white/10 transition">
              {secondaryBtn}
            </button>
          )}

        </div>

      </div>
    </div>
  );
};

export default HomeSection;