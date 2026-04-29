import React from "react";

import icon1 from "../../assets/why/icon1.png";
import icon2 from "../../assets/why/icon2.png";
import icon3 from "../../assets/why/icon3.png";
import icon4 from "../../assets/why/icon4.png";
import icon5 from "../../assets/why/icon5.png";

const features = [
  { icon: icon1, title: "Experienced Legal Experts" },
  { icon: icon2, title: "Clear & Transparent Process" },
  { icon: icon3, title: "High Success Rate" },
  { icon: icon4, title: "Full Documentation Support" },
  { icon: icon5, title: "Interview Preparation" },
];

const WhyChoose4 = () => {
  return (
    <section className="bg-[#060B14] text-white py-16 md:py-20 px-6 md:px-12 lg:px-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>

          {/* TAG */}
          <div className="mb-4">
            <span className="px-5 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
              Choose Us
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-tight mb-4">
            Why Trust Our Green <br />
            <span className="underline">Card Expertise</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
            We provide expert support, clear communication, and proven results to ensure your Green Card application is a success.
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-5">

          {/* 🔥 TOP ROW (3 cards) */}
          <div className="grid grid-cols-3 gap-4">
            {features.slice(0, 3).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>

          {/* 🔥 BOTTOM ROW (2 cards centered) */}
          <div className="grid grid-cols-2 gap-4 max-w-[70%]">
            {features.slice(3, 5).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

/* 🔥 CARD */
const Card = ({ item }) => {
  return (
    <div
      className="bg-[#0b1220] border border-white/10 rounded-[16px] p-5 
      hover:border-[#2BD7D7]/40 transition duration-300 
      hover:shadow-[0_0_20px_rgba(43,215,215,0.15)]"
    >

      {/* ICON */}
      <div className="w-10 h-10 mb-4 flex items-center justify-center 
      bg-black/60 rounded-full">
        <img src={item.icon} alt="icon" className="w-5 h-5" />
      </div>

      {/* TITLE */}
      <h3 className="text-[14px] md:text-[15px] font-medium leading-snug">
        {item.title}
      </h3>

    </div>
  );
};

export default WhyChoose4;