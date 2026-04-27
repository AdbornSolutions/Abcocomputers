import React from "react";

import i1 from "../../assets/DepartmentPage/WHYchooseOAT/1.png";
import i2 from "../../assets/DepartmentPage/WHYchooseOAT/2.png";
import i3 from "../../assets/DepartmentPage/WHYchooseOAT/3.png";
import i4 from "../../assets/DepartmentPage/WHYchooseOAT/4.png";
import i5 from "../../assets/DepartmentPage/WHYchooseOAT/5.png";

const data = [
  {
    icon: i1,
    title: "Strategic University Matching",
    desc: "We align your academic profile with carefully selected universities to maximize acceptance probability and long-term career value.",
    highlight: true,
  },
  {
    icon: i2,
    title: "Error-Free Documentation",
    desc: "Meticulous preparation and verification of all required documents to eliminate errors and prevent application delays.",
  },
  {
    icon: i3,
    title: "Strong SOP Development",
    desc: "Expert-crafted Statements of Purpose that effectively highlight your strengths, goals, and academic potential.",
  },
  {
    icon: i4,
    title: "Transparent Process Tracking",
    desc: "Clear communication and real-time updates throughout the admission journey for complete clarity and confidence.",
  },
  {
    icon: i5,
    title: "High Admission Success Rate",
    desc: "A proven track record of successful admissions achieved through structured strategies and dedicated expertise.",
  },
];

const WhyChooseOurAT = () => {
  return (
    <section className="w-full bg-[#060B14] text-white py-16 px-4 md:px-10 lg:px-20">

      {/* ===== TAG ===== */}
      <div className="flex justify-center mb-6">
        <div className="px-5 py-1 rounded-full 
        bg-white/10 border border-white/20 
        text-gray-300 text-sm">
          Why Choose Our Admission Team
        </div>
      </div>

      {/* ===== HEADING ===== */}
      <div className="text-center mb-14">
        <h2 className="text-[24px] sm:text-[30px] md:text-[42px] font-semibold">
          Why Our Admission Experts Stand Apart
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-[14px] md:text-[16px]">
          Precision-driven guidance designed to maximize admission success and ensure a 
          transparent, structured process.
        </p>
      </div>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {data.map((item, i) => (
          <div
            key={i}
            className={`
              p-6 rounded-[16px] min-h-[160px]
              transition duration-300
              ${
                item.highlight
                  ? "border border-white bg-transparent"
                  : "bg-[#0b1220] border border-white/10"
              }
              hover:border-[#2BD7D7]/40
              hover:shadow-[0_0_20px_rgba(43,215,215,0.15)]
            `}
          >

            {/* ICON + TITLE */}
            <div className="flex items-start gap-3 mb-3">

              <div className="w-10 h-10 flex items-center justify-center 
              bg-white rounded-full flex-shrink-0">
                <img src={item.icon} alt="icon" className="w-5 h-5 object-contain" />
              </div>

              <h3 className="text-[16px] sm:text-[18px] font-semibold leading-snug underline">
                {item.title}
              </h3>

            </div>

            {/* DESC */}
            <p className="text-gray-400 text-[13px] leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default WhyChooseOurAT;