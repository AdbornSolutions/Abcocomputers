import React, { useRef } from "react";
import { gatewayData } from "../../data/data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMoneyBillWave,
  FaUserGraduate,
  FaBriefcase,
  FaGlobe,
  FaChartBar,
  FaRocket,
} from "react-icons/fa";

const iconMap = {
  "Comprehensive Financial Support": <FaMoneyBillWave />,
  "Guidance and Mentorship": <FaUserGraduate />,
  "Job Placement in the USA": <FaBriefcase />,
  "Open for Graduates": <FaGlobe />,
  "Transparent Cost Policy": <FaChartBar />,
  "Start Your Future": <FaRocket />,
};

const YourGateway = () => {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#020617] text-white py-12 md:py-16 px-4 flex justify-center">
      <div className="w-full max-w-6xl relative">

        {/* ===== HEADING ===== */}
        <div className="mb-6 text-center md:text-left">
          <h2
            className="text-[28px] sm:text-[34px] md:text-[42px] font-medium leading-tight 
            bg-[linear-gradient(95deg,_#FFFFFF_0.2%,_#2BD7D7_30%)] 
            bg-clip-text text-transparent"
          >
            Your Gateway
            <br />
            to a Promising Future
          </h2>

          <p className="text-white mt-3 text-[14px] sm:text-[16px] md:text-[20px]">
            "Where talent meets opportunity, and innovation fuels success."
          </p>
        </div>

        {/* ===== LEFT ARROW ===== */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center 
          absolute left-[-30px] top-[65%] -translate-y-1/2 
          w-8 h-8 rounded-full border border-white/20 
          bg-[#0b1220] hover:bg-white/10 transition z-10"
        >
          <FaChevronLeft size={12} />
        </button>

        {/* ===== RIGHT ARROW ===== */}
        <button
          onClick={scrollRight}
          className="hidden md:flex items-center justify-center 
          absolute right-[-30px] top-[65%] -translate-y-1/2 
          w-8 h-8 rounded-full border border-white/20 
          bg-[#0b1220] hover:bg-white/10 transition z-10"
        >
          <FaChevronRight size={12} />
        </button>

        {/* ===== SLIDER ===== */}
        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-2 md:px-4"
        >
          {gatewayData.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 
              w-[85%] sm:w-[300px] md:w-[380px] lg:w-[401px] 
              h-auto md:h-[205px]
              ${index === 0 ? "ml-2 md:ml-[40px]" : ""}
              bg-[#0b1220] p-4 md:p-5 rounded-[20px] md:rounded-[30px] 
              border border-white/10 flex flex-col justify-between`}
            >
              
              {/* ICON + TITLE */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center 
                  bg-white/10 rounded-full text-[16px] md:text-[20px]">
                  {iconMap[item.title]}
                </div>

                <h3 className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-medium leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* DESC */}
              <p className="text-white text-[12px] sm:text-[13px] leading-relaxed mt-3">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default YourGateway;