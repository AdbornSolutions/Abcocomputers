import React from "react";

import icon1 from "../../assets/LearningPage/icon1.png";
import icon2 from "../../assets/LearningPage/icon2.png";
import icon3 from "../../assets/LearningPage/icon3.png";
import icon4 from "../../assets/LearningPage/icon4.png";

const features = [
  {
    icon: icon1,
    title: "Certified Elite Trainers",
    desc: "Learn from experienced trainers, counselors, and industry mentors with strong exam and admission expertise.",
  },
  {
    icon:icon2,
    title: "AI-Powered Mock Tests",
    desc: "Practice with smart mock tests, performance analysis, and feedback to improve your final score accuracy.",
  },
  {
    icon:icon3,
    title: "Cognitive Strategies",
    desc: "Build focus, time management, confidence, and exam techniques for high-pressure test conditions.",
  },
  {
    icon: icon4,
    title: "Global Alumni Hub",
    desc: "Connect with students and professionals studying or working abroad for peer guidance and real insights. ",
  },
];

const WhatmakesUsDiff = () => {
  return (
  <section className="text-white py-20 px-6 md:px-12 lg:px-20">

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-4xl md:text-5xl  leading-tight mb-6">
        What makes <br /> us
        <span className="block text-cyan-400 mt-2">different?</span>
      </h2>

      <p className="text-gray-400 max-w-md mb-8 text-sm md:text-base">
       Beyond standard coaching, we provide a complete learning ecosystem designed for high-performance global success.
      </p>

      {/* STATS BOX */}
      <div className="relative bg-[#0b1d2e] rounded-2xl p-6 w-full max-w-[240px] overflow-hidden">

        {/* TOP CURVED BORDER */}
        <div className="absolute top-0 left-0 w-full h-6 pointer-events-none">
          <div className="w-full h-full border-t-4 border-white/100 rounded-t-2xl"></div>
        </div>

        <h3 className="text-2xl font-semibold mb-1">98%</h3>
        <p className="text-gray-400 text-sm">
          Student Success Rate across all international formats.
        </p>

      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      {features.map((item, index) => (
        <div
          key={index}
          className={`
            bg-[#0b1d2e] rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]

            ${index === 0 || index === 2 ? "min-h-[260px]" : "min-h-[200px]"}
            ${index === 1 || index === 3 ? "sm:mt-8" : ""}
          `}
        >
          
          {/* ICON BOX */}
          <div className=" w-10 h-10 flex items-center justify-center rounded-lg mb-4">
            <img src={item.icon} alt="icon"  />
          </div>

          {/* TITLE */}
          <h3 className="text-lg font-medium mb-2">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>
  );
};

export default WhatmakesUsDiff;
