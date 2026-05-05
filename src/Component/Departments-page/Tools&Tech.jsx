import React from "react";

import tech1 from "../../assets/DepartmentPage/Tools&tech/1.png";
import tech2 from "../../assets/DepartmentPage/Tools&tech/2.png";
import tech3 from "../../assets/DepartmentPage/Tools&tech/3.png";
import tech4 from "../../assets/DepartmentPage/Tools&tech/4.png";
import tech5 from "../../assets/DepartmentPage/Tools&tech/5.png";

import arrow from "../../assets/DepartmentPage/curved.png";

const ToolsTech = () => {
  return (
    <section className="w-full bg-[#060B14] text-white py-20 px-6">

      {/* TAG */}
      <div className="flex justify-center mb-6">
        <div className="px-5 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
          Tools & Technologies
        </div>
      </div>

      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-[28px] md:text-[36px] font-semibold">
          Cutting-Edge Tools & Technologies We Use
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Our training programs leverage industry-leading tools and platforms to ensure students are equipped with the skills that employers demand in today’s fast-paced IT environment.
        </p>
      </div>

      {/* 🔥 FLOW */}
      <div className="hidden md:flex relative max-w-[1100px] mx-auto items-center justify-between">

        {/* TOOL 1 */}
        <img src={tech1} className="w-[120px]" />

        {/* ARROW */}
        <img
          src={arrow}
          className="w-[70px] rotate-0 opacity-100"
        />

        {/* TOOL 2 */}
        <img src={tech2} className="w-[120px]" />

        {/* ARROW */}
        <img
          src={arrow}
          className="w-[70px] rotate-0 opacity-100"
        />

        {/* TOOL 3 */}
        <img src={tech3} className="w-[120px]" />

        {/* ARROW */}
        <img
          src={arrow}
          className="w-[70px] rotate-0 opacity-100"
        />

        {/* TOOL 4 */}
        <img src={tech4} className="w-[120px]" />

        {/* ARROW */}
        <img
          src={arrow}
          className="w-[70px] rotate-0 opacity-100"
        />

        {/* TOOL 5 */}
        <img src={tech5} className="w-[120px]" />

      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden flex flex-wrap justify-center gap-6 mt-10">
        {[tech1, tech2, tech3, tech4, tech5].map((img, i) => (
          <img key={i} src={img} className="w-[50px]" />
        ))}
      </div>

    </section>
  );
};

export default ToolsTech;
