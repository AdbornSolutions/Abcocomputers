import React from "react";

// HERO BG IMAGE
import heroBg from "../../assets/home-page/home-bg.png";

// IMPORT COMPONENTS
import Sliders from "../Common/Sliders";
import CareerinUsa from "./CareerinUsa";

const HomeHeroSection = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div
        className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[##060B14]/70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-heading text-[40px] md:text-[48px] leading-tight max-w-3xl">
            Unlock Your IT Career in the USA with ABCO Computers
          </h1>

          <p className="mt-4 max-w-2xl text-gray-300 text-[18px] leading-relaxed">
            Tap into our network of employers and land positions that match your
            skills and career goals.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            <button className="px-6 py-3 w-44 rounded-full bg-white/10 backdrop-blur-lg border-t border-white/60 text-white shadow-lg hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-6 py-3 w-44 rounded-full 
              bg-white text-black border border-black
              hover:bg-[linear-gradient(90deg,_#FFFFFF_0%,_#2BD7D7_87.5%)] 
              hover:border-[#2BD7D7]
              transition duration-300">
              Book a call
            </button>
          </div>
        </div>

       

        {/* GRADIENT */}
        <div className="absolute bottom-0 left-0 w-full h-40 flex-1
          bg-gradient-to-b from-transparent via-[#060B14]/90 to-[#060B14] z-10">
        </div>
      </div>
        {/* SLIDER COMPONENT */}
        <Sliders />
        {/* CAREER SECTION */}
        <CareerinUsa />
    </>
  );
};

export default HomeHeroSection;