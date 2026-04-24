/* eslint-disable no-unused-vars */
import React from "react";

const features = [
  {
    title: "Diverse Client Portfolio",
    desc: "Work with multiple clients across industries and domains.",
    position: "top-left",
  },
  {
    title: "IT Staffing Expertise",
    desc: "Strong experience in recruiting top IT talent globally.",
    position: "left",
  },
  {
    title: "Industry Knowledge & Trends",
    desc: "Stay updated with latest technologies and hiring trends.",
    position: "bottom",
  },
  {
    title: "Collaborative Approach",
    desc: "We believe in teamwork and transparent communication.",
    position: "right",
  },
  {
    title: "Trusted IT Partner",
    desc: "Reliable and long-term staffing solutions provider.",
    position: "top-right",
  },
];

const positionClasses = {
  "top-left": "top-0 left-10",
  left: "top-1/2 left-0 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2",
  right: "top-1/2 right-0 -translate-y-1/2",
  "top-right": "top-0 right-10",
};

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-r from-[#020617] to-[#0f172a] text-white py-20 flex justify-center items-center">
      <div className="relative w-[500px] h-[500px]">

        {/* Center Circle */}
        <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 
        rounded-full bg-gray-200 text-black flex flex-col justify-center items-center text-center shadow-lg">
          <h2 className="font-bold text-sm">
            Why Companies <br /> Choose Abco Computers
          </h2>
        </div>

        {/* Outer Circles */}
        {features.map((item, index) => (
          <div
            key={index}
            className={`absolute ${positionClasses[item.position]} w-28`}
          >
            <div className="flex flex-col items-center text-center">
              
              {/* Circle */}
              <div className="w-16 h-16 rounded-full bg-gray-200 text-black flex items-center justify-center shadow-md">
                <span className="text-lg">★</span>
              </div>

              {/* Text */}
              <h3 className="mt-2 text-sm font-semibold">
                {item.title}
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default WhyChooseUs;