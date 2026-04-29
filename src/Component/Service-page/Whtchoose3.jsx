import React from "react";

import icon1 from "../../assets/why/icon1.png";
import icon2 from "../../assets/why/icon2.png";
import icon3 from "../../assets/why/icon3.png";
import icon4 from "../../assets/why/icon4.png";

const features = [
  { icon: icon1, title: "World-Class Universities" },
  { icon: icon2, title: "Global Networking" },
  { icon: icon3, title: "Job Opportunities" },
  { icon: icon4, title: "Cultural Diversity" },
];

const WhyChoose3 = () => {
  return (
    <section className="bg-[#060B14] text-white py-16 md:py-20 px-6 md:px-12 lg:px-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* TAG */}
          <div className="mb-4">
            <span className="px-5 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
              Choose Us
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-semibold leading-tight mb-4">
            Benefits of Pursuing a <br />
            <span className="underline">Masters in the USA</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
            The USA offers unmatched educational opportunities, with world-class institutions,
            excellent networking prospects, job opportunities, and a rich cultural experience.
            Discover the many advantages of studying in the USA.
          </p>

        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="grid grid-cols-2 gap-5">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#0b1220] border border-white/10 rounded-[16px] p-5 
              hover:border-[#2BD7D7]/40 transition duration-300"
            >

              {/* ICON */}
              <div className="w-10 h-10 mb-4 flex items-center justify-center 
              bg-black/60 rounded-full">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-5 h-5 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[15px] md:text-[17px] font-medium leading-snug">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose3;