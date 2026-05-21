import React from "react";
import LightRays from "./Particles"; // Added import

const HomeSection = ({
  smallText,
  heading,
  description,
  primaryBtn,
  secondaryBtn,
}) => {
  return (
    <div className="w-full min-h-[86vh] md:min-h-[110vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-14 text-white relative overflow-hidden bg-[#060B14]">

      {/* 🌟 ANIMATED LIGHT RAYS BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <LightRays
    particleColors={["#ffffff"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover
    alphaParticles={false}
    disableRotation={false}
    pixelRatio={1}
/>
      </div>

   

      
      {/* 🔥 DARK OVERLAY FOR DEPTH */}
      {/* Added pointer-events-none so it doesn't block the mouse interactions for LightRays */}
      <div className="absolute inset-0 bg-[#060B14]/70 z-0 pointer-events-none"></div>

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