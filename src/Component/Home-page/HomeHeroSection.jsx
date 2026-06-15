import React, { useEffect, useRef, useState } from "react";

// HERO BG VIDEO
import heroVideo from "../../assets/Herobg.mp4";

// IMPORT COMPONENTS
import Sliders from "../Common/Sliders";
import CareerinUsa from "./CareerinUsa";
import ScrollReveal from "../Common/ScrollReveal";

const HomeHeroSection = () => {
  const videoRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const playVideo = () => {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {});
      }
    };

    playVideo();
    document.addEventListener("visibilitychange", playVideo);
    window.addEventListener("touchstart", playVideo, { once: true, passive: true });

    return () => {
      document.removeEventListener("visibilitychange", playVideo);
      window.removeEventListener("touchstart", playVideo);
    };
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="w-full min-h-[88vh] md:min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-14 text-white relative overflow-hidden bg-[#060B14]">
        <video
          ref={videoRef}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay (Fixed double hash typo) */}
        <div className="absolute inset-0 bg-[#060B14]/40 z-0"></div>
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#020617]/70 to-transparent z-0"></div>

        {/* Content */}
        <div
          className={`relative z-10 flex w-full max-w-[92vw] flex-col items-center transition-all duration-[1400ms] ease-out sm:max-w-3xl ${
            showContent
              ? "scale-100 opacity-100"
              : "scale-75 opacity-0"
          }`}
        >
          <ScrollReveal
            as="span"
            variant="scale"
            className="inline-flex max-w-full items-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-center text-[11px] text-cyan-100 backdrop-blur-xl premium-glass sm:px-4 sm:text-sm"
          >
            Career training. Visa guidance. Placement support.
          </ScrollReveal>

          <ScrollReveal
            as="h1"
            delay={120}
            className="mt-5 max-w-3xl font-heading text-[28px] leading-tight sm:text-[40px] md:text-[48px]"
          >
            Unlock Your IT Career in the USA with ABCO Computers
          </ScrollReveal>

          <ScrollReveal
            as="p"
            delay={220}
            className="mt-4 max-w-2xl text-[14px] leading-relaxed text-gray-300 sm:text-[18px]"
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
              Contact us
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
