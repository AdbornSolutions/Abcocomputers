import React from "react";
import overview from "../../assets/DepartmentPage/overview.png";

const Overview = () => {
  return (
    <section className="w-full bg-[#060B14] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">

      {/* ===== TOP TAG ===== */}
      <div className="flex justify-center mb-10">
        <div className="px-5 py-1 rounded-full 
        bg-white/10 backdrop-blur-md border border-white/20 
        text-gray-300 text-sm">
          Overview
        </div>
      </div>

      {/* ===== MAIN GRID ===== */}
      <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">

        {/* ===== LEFT IMAGE ===== */}
        <div className="relative flex justify-center md:justify-start">

          {/* GLOW BORDER */}
          <div className="absolute inset-0 rounded-[29px] 
          border border-cyan-400/40 
          shadow-[0_0_25px_rgba(43,215,215,0.4)]"></div>

          {/* IMAGE */}
          <img
            src={overview}
            alt="Overview"
            className="relative z-10 w-full max-w-[600px] 
            rounded-[20px] object-cover"
          />

        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div>

          {/* HEADING */}
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold leading-tight mb-6">
            Built on Specialized <br /> Expertise
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed mb-5">
            Our consulting firm operates through dedicated departments, each focused on delivering excellence in its respective domain. From strategy and technology to compliance and talent management, our teams collaborate to provide seamless, end-to-end solutions.
          </p>

          <p className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed">
            This structured approach ensures that every client receives the right expertise at the right time, resulting in faster outcomes, clearer communication, and superior results.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Overview;