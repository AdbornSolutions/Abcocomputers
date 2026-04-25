import React from "react";

// HERO BG IMAGE
import heroBg from "../../assets/home-page/home-bg.png";

// CAREER IMAGES
import leftImg from "../../assets/home-page/Rectangle8.png";
import rightImg from "../../assets/home-page/Rectangle9.png";

// SLIDER IMAGES
import s1 from "../../assets/Sliders/1.png";
import s2 from "../../assets/Sliders/2.png";
import s3 from "../../assets/Sliders/3.png";
import s4 from "../../assets/Sliders/4.png";
import s5 from "../../assets/Sliders/5.png";
import s6 from "../../assets/Sliders/6.png";
import s7 from "../../assets/Sliders/7.png";

const sliderImages = [s1, s2, s3, s4, s5, s6, s7];

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
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#020617]/70"></div>

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

            <button className="px-6 py-3 w-44 rounded-full bg-white text-black hover:bg-white/10 hover:text-white transition">
              Book a call
            </button>
          </div>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="absolute bottom-10 w-full overflow-hidden">
          <div className="flex gap-10 animate-slide whitespace-nowrap">
            {sliderImages.map((img, i) => (
              <img
                key={i}
                src={img}
                className="h-10 opacity-70 hover:opacity-100 transition"
                alt="logo"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= CAREER SECTION ================= */}
      <div className="w-full bg-[#020617] py-20 px-6 flex justify-center">
        <div className="w-full max-w-6xl flex items-center justify-between gap-10">

          {/* LEFT IMAGE */}
          <div className="hidden md:block">
            <img
              src={leftImg}
              alt="graduate"
              className="w-64 h-80 object-cover rounded-[120px]"
            />
          </div>

          {/* CENTER */}
          <div className="text-center max-w-xl text-white">
            <h2 className="font-heading text-[28px] md:text-[32px] mb-4">
              Welcome to ABCO Computers: Your Gateway to a Promising Future!
            </h2>

            <p className="text-gray-300 text-[15px] leading-[1.6]">
              ABCO Computers is thrilled to present an extraordinary career
              opportunity in the United States, offering a fully funded master’s
              program for aspiring professionals.
            </p>

            <div className="mt-6">
              <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition">
                Make Career In USA
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block">
            <img
              src={rightImg}
              alt="professional"
              className="w-64 h-80 object-cover rounded-[120px]"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default HomeHeroSection;