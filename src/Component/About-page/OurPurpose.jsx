import React from "react";
import { FaChartBar, FaEye, FaFlag } from "react-icons/fa";

const OurPurpose = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#060B14] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-12 overflow-hidden">

      {/* 🔥 RIGHT SIDE GLOW (NOW BEHIND CARDS) */}
      <div className="absolute w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] 
      bg-white right-[-100px] top-[32%] blur-[90px] opacity-50 
      pointer-events-none z-0"></div>

      {/* TOP GRADIENT */}
      <div className="absolute -top-20 left-0 w-full h-40 
      bg-[#060B14] blur-[14px] z-20"></div>

      {/* TAG */}
      <div className="flex justify-center mb-10 mt-5 relative z-10">
        <span className="px-5 py-2 rounded-full 
        bg-white/10 backdrop-blur-md border border-white/20 
        text-gray-300 text-sm shadow">
          Our Purpose & Principles
        </span>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto relative z-10">

        {/* ===== LEFT BIG CARD ===== */}
        <div className="bg-[#0b1220] 
        p-6 sm:p-8 md:p-16 lg:p-24 
        rounded-[20px] border border-white/10 flex flex-col">

          {/* ICON + TITLE */}
          <div className="flex items-center gap-3 mb-4 ">
            <FaChartBar className="text-white text-lg md:text-xl" />
            <h3 className="text-[20px] sm:text-[24px] md:text-[26px] font-semibold">
              Our Value
            </h3>
          </div>

          {/* CONTENT */}
          <ul className="space-y-3 text-gray-400 text-[12px] sm:text-[13px] leading-relaxed">

            <li>
              <span className="text-white font-semibold">• Highly Supportive :</span>{" "}
             We support every candidate and client with proper guidance, transparent communication, and professional service.
            </li>

            <li>
              <span className="text-white font-semibold">• Collaborative :</span>{" "}
              We believe in teamwork and strong relationships. Our team works closely with clients and candidates to understand their goals and provide the right solutions
            </li>

            <li>
              <span className="text-white font-semibold">• Business Focused :</span>{" "}
              We respect every business requirement and deliver practical IT and staffing solutions that support productivity, performance, and long-term growth.
            </li>

          </ul>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="flex flex-col gap-6">

          {/* VISION */}
          <div className="bg-[#0b1220] 
          p-6 sm:p-8 md:p-10 lg:p-12 
          rounded-[20px] border border-white/10">
            
            <div className="flex items-center gap-3 mb-3">
              <FaEye className="text-white text-base md:text-lg" />
              <h3 className="text-[18px] md:text-[20px] font-semibold">
                Our Vision
              </h3>
            </div>

            <p className="text-gray-400 text-[12px] sm:text-[13px] leading-relaxed">
              Our vision is to become a trusted global IT solutions and consulting partner known for innovation, quality services, career development, and customer satisfaction. We aim to help individuals and businesses achieve success through technology and talent.
            </p>

          </div>

          {/* MISSION */}
          <div className="bg-[#0b1220] 
          p-6 sm:p-8 md:p-10 lg:p-12 
          rounded-[20px] border border-white/10">
            
            <div className="flex items-center gap-3 mb-3">
              <FaFlag className="text-white text-base md:text-lg" />
              <h3 className="text-[18px] md:text-[20px] font-semibold">
                Our Mission
              </h3>
            </div>

            <p className="text-gray-400 text-[12px] sm:text-[13px] leading-relaxed">
              Our mission is to provide reliable IT solutions, career guidance, staffing services, and learning support that help businesses grow and professionals build successful careers in the USA IT industry.
            </p>

          </div>

        </div>

      </div>
      {/* bottom GRADIENT */}
      <div className="absolute -bottom-20 left-0 w-full h-40 
      bg-[#060B14] blur-[14px] z-20"></div>
      
    </section>
  );
};

export default OurPurpose;