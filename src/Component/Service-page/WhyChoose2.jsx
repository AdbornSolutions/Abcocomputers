import React from "react";

import icon1 from "../../assets/why/icon1.png";
import icon2 from "../../assets/why/icon2.png";
import icon3 from "../../assets/why/icon3.png";
import icon4 from "../../assets/why/icon4.png";
import icon5 from "../../assets/why/icon5.png"; // add one more

const features = [
  { icon: icon1, title: "Industry-Linked Network" },
  { icon: icon2, title: "Resume & Profile Optimization" },
  { icon: icon3, title: "Targeted Job Matching" },
  { icon: icon4, title: "Expert Interview Coaching" },
  { icon: icon5, title: "Job Offer Assistance & Negotiation" },
];

const WhyChoose2 = () => {
  return (
    <section className="bg-[#060B14] text-white py-16 md:py-20 px-6 md:px-12 lg:px-20 text-center">

      {/* TAG */}
      <div className="flex justify-center mb-5">
        <span className="px-5 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
          Choose Us
        </span>
      </div>

      {/* HEADING */}
      <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-semibold mb-3">
        Why Our IT Job Placement Service Stands Out
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-12">
        Our service goes beyond just job placement; we offer a strategic, personalized
        approach to ensure you get the job you deserve.
      </p>

      {/* FEATURES ROW */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-14">

        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center max-w-[160px]">

            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center mb-3">
              <img
                src={item.icon}
                alt="icon"
                className="w-full h-full object-contain opacity-90"
              />
            </div>

            {/* TITLE */}
            <p className="text-[14px] md:text-[15px] text-gray-300 leading-snug">
              {item.title}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default WhyChoose2;