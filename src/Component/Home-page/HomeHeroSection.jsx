import React from "react";

// HERO BG VIDEO
import heroVideo from "../../assets/Herobg.mp4";

// IMPORT COMPONENTS
import Sliders from "../Common/Sliders";
import CareerinUsa from "./CareerinUsa";
import ScrollReveal from "../Common/ScrollReveal";

const HomeHeroSection = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="w-full min-h-[88vh] md:min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-14 text-white relative overflow-hidden bg-[#060B14]">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay (Fixed double hash typo) */}
        <div className="absolute inset-0 bg-[#060B14]/40 z-0"></div>
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#020617]/70 to-transparent z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <ScrollReveal
            as="span"
            variant="scale"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm text-cyan-100 backdrop-blur-xl premium-glass"
          >
            Career training. Visa guidance. Placement support.
          </ScrollReveal>

          <ScrollReveal
            as="h1"
            delay={120}
            className="mt-5 font-heading text-[32px] sm:text-[40px] md:text-[48px] leading-tight max-w-3xl"
          >
            Unlock Your IT Career in the USA with ABCO Computers
          </ScrollReveal>

          <ScrollReveal
            as="p"
            delay={220}
            className="mt-4 max-w-2xl text-gray-300 text-[15px] sm:text-[18px] leading-relaxed"
          >
            Tap into our network of employers and land positions that match your
            skills and career goals.
          </ScrollReveal>

          {/* Buttons */}
          <ScrollReveal
            delay={320}
            className="mt-6 flex gap-4 flex-wrap justify-center"
          >
            <button className="px-6 py-3 w-44 rounded-full bg-white/10 backdrop-blur-lg border border-white/25 text-white shadow-lg magnetic-cta">
              Get Started
            </button>

            <button className="px-6 py-3 w-44 rounded-full 
              bg-white text-black border border-black
              hover:bg-[linear-gradient(90deg,_#FFFFFF_0%,_#2BD7D7_87.5%)] 
              hover:border-[#2BD7D7]
              magnetic-cta">
              Book a call
            </button>
          </ScrollReveal>
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
