import React from "react";
import ScrollReveal from "../Common/ScrollReveal";

// CAREER IMAGES
import leftImg from "../../assets/home-page/Rectangle8.png";
import rightImg from "../../assets/home-page/Rectangle9.png";

const CareerinUsa = () => {
  return (
    <div className="w-full bg-[#060B14] py-16 md:py-20 px-4 md:px-6 flex justify-center">
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT IMAGE */}
        <ScrollReveal variant="left" className="hidden md:block">
          <img
            src={leftImg}
            alt="graduate"
            className="w-52 md:w-64 h-64 md:h-80 object-cover rounded-[80px] md:rounded-[120px] parallax-soft"
          />
        </ScrollReveal>

        {/* CENTER */}
        <ScrollReveal className="text-center max-w-xl text-white">
          
          <h2 className="font-heading text-[24px] sm:text-[28px] md:text-[32px] leading-snug mb-4">
            Welcome to ABCO Computers: Your Gateway to a Promising Future!
          </h2>

          <p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mt-6 mb-8">
            ABCO Computers is a global IT solutions and consulting company helping students, graduates, and professionals build successful careers in the USA IT industry. We provide career-focused IT training, expert mentorship, visa guidance, placement support, and technology consulting services to help candidates move ahead with confidence.
From skill development to job preparation, our team supports you at every step of your IT career journey. Whether you want to start your career, upgrade your technical skills, or explore better opportunities in the USA, ABCO Computers is here to guide you.
          </p>

          <button className="px-6 py-3 rounded-full bg-[#101826] text-white border border-white/10 magnetic-cta">
            Make Career In USA
          </button>
        </ScrollReveal>

        {/* RIGHT IMAGE */}
        <ScrollReveal variant="right" className="hidden md:block">
          <img
            src={rightImg}
            alt="professional"
            className="w-52 md:w-64 h-64 md:h-80 object-cover rounded-[80px] md:rounded-[120px] parallax-soft-delayed"
          />
        </ScrollReveal>
     </div>
    </div>
  );
};

export default CareerinUsa;
