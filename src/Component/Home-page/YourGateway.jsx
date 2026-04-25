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
    sliderRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-[#020617] text-white py-16 px-4 flex justify-center">
      <div className="w-full max-w-6xl relative">

        {/* ===== HEADING ===== */}
        <div className="mb-6">
          <h2
            className="text-[42px] md:text-[42px] font-medium leading-tight 
            bg-[linear-gradient(95deg,_#FFFFFF_0.2%,_#2BD7D7_30%)] 
            bg-clip-text text-transparent"
          >
            Your Gateway
            <br />
            to a Promising Future
          </h2>

          <p className="text-white mt-3 text-[20px] md:text-[20px]">
            "Where talent meets opportunity, and innovation fuels success."
          </p>
        </div>

        {/* ===== LEFT ARROW ===== */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center 
          absolute left-[-50px] top-[70%] -translate-y-1/2 
          w-8 h-8 rounded-full border border-white/20 
          bg-[#0b1220] hover:bg-white/10 transition z-10"
        >
          <FaChevronLeft size={12} />
        </button>

        {/* ===== RIGHT ARROW ===== */}
        <button
          onClick={scrollRight}
          className="hidden md:flex items-center justify-center 
          absolute right-[-50px] top-[70%] -translate-y-1/2 
          w-8 h-8 rounded-full border border-white/20 
          bg-[#0b1220] hover:bg-white/10 transition z-10"
        >
          <FaChevronRight size={12} />
        </button>

        {/* ===== SLIDER ===== */}
        <div
  ref={sliderRef}
  className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
>
  {gatewayData.map((item, index) => (
    <div
      key={index}
      className={`flex-shrink-0 w-[401px] h-[205px] 
      ${index === 0 ? "ml-[80px]" : ""} 
      bg-[#0b1220] p-5 rounded-[30px] border border-white/10 flex flex-col justify-between`}
    >
      
      {/* ICON + TITLE */}
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 flex items-center justify-center 
          bg-white/10 rounded-full text-[20px]">
          {iconMap[item.title]}
        </div>

        <h3 className="text-[26px] font-medium leading-snug">
          {item.title}
        </h3>
      </div>

      {/* DESC */}
      <p className="text-white text-[13px] leading-relaxed mt-3">
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