import React from "react";

import img1 from "../../assets/DepartmentPage/ToolsTech2/1.png";
import img2 from "../../assets/DepartmentPage/ToolsTech2/2.png";
import img3 from "../../assets/DepartmentPage/ToolsTech2/3.png";
import img4 from "../../assets/DepartmentPage/ToolsTech2/4.png";

import arrow from "../../assets/DepartmentPage/curved.png";

const Toolstech2 = () => {
  return (
    <section className="w-full bg-[#060B14] text-white py-20 px-6">

      {/* TAG */}
      <div className="flex justify-center mb-6">
        <div className="px-5 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
          Tools & Platforms
        </div>
      </div>

      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-[28px] md:text-[36px] font-semibold">
          Legal Tools and Platforms We Use
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          We leverage cutting-edge legal technologies to ensure contract compliance, accuracy, and efficiency at every stage.
        </p>
      </div>

      {/* 🔥 FLOW */}
      <div className="relative max-w-[1100px] mx-auto flex items-center justify-between">

        {/* TOOL 1 */}
        <img src={img1} className="h-[100px] object-contain" />

        {/* ARROW */}
        <img src={arrow} className="w-[80px] opacity-100" />

        {/* TOOL 2 */}
        <img src={img2} className="h-[100px] object-contain" />

        {/* ARROW */}
        <img src={arrow} className="w-[80px] opacity-100" />

        {/* TOOL 3 */}
        <img src={img3} className="h-[100px] object-contain" />

        {/* ARROW */}
        <img src={arrow} className="w-[80px] opacity-100" />

        {/* TOOL 4 */}
        <img src={img4} className="h-[100px] object-contain" />

      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden flex flex-wrap justify-center gap-6 mt-10">
        {[img1, img2, img3, img4].map((img, i) => (
          <img key={i} src={img} className="h-[40px]" />
        ))}
      </div>

    </section>
  );
};

export default Toolstech2;