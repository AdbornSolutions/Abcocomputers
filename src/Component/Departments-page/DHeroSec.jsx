import React from "react";

const DepartmentHero = ({
  breadcrumb,
  heading,
  description,
  primaryBtn,
  secondaryBtn,
}) => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 text-white relative overflow-hidden bg-[#060B14]">

      {/* 🔥 TOP MAIN GLOW */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 
      w-[900px] h-[700px] rounded-full 
      bg-[#2BD7D7] opacity-100 blur-[120px]"></div>

      {/* 🔥 SECOND SOFT GLOW */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 
      w-[500px] h-[500px] rounded-full 
      bg-[#2BD7D7] opacity-30 blur-[200px]"></div>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#060B14]/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* BREADCRUMB */}
        <p className="text-xs sm:text-sm text-gray-400 mb-4 tracking-wide">
          {breadcrumb}
        </p>

        {/* ✅ HEADING (Single Line) */}
        <h1 className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] 
        font-semibold leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
          {heading}
        </h1>

        {/* ✅ DESCRIPTION (Full Width) */}
        <p className="mt-4 w-full px-2 md:px-20 lg:px-40 
        text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
          {description}
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex gap-4 flex-wrap justify-center">

          {/* PRIMARY */}
          <button className="px-6 py-3 rounded-full 
          bg-gradient-to-r from-[#9b87f5] to-[#2BD7D7] 
          text-white text-sm md:text-base 
          shadow-lg hover:scale-105 transition">
            {primaryBtn}
          </button>

          {/* SECONDARY */}
          <button className="px-6 py-3 rounded-full 
          border border-white/40 
          text-white text-sm md:text-base 
          hover:bg-white/10 hover:scale-105 transition">
            {secondaryBtn}
          </button>

        </div>

      </div>
      {/* bottom GRADIENT */}
      <div className="absolute -bottom-20 left-0 w-full h-40 
      bg-[#060B14] blur-[14px] z-20"></div>   

    </section>
  );
};

export default DepartmentHero;