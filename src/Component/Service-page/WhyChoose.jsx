import React from "react";

// 👉 Figma icons
import icon1 from "../../assets/why/icon1.png";
import icon2 from "../../assets/why/icon2.png";
import icon3 from "../../assets/why/icon3.png";
import icon4 from "../../assets/why/icon4.png";
import founder from "../../assets/why/founder.png";

const features = [
  {
    icon: icon1,
    title: "Fully Funded Master's Options",
  },
  {
    icon: icon2,
    title: "End-to-End Visa Guidance",
  },
  {
    icon: icon3,
    title: "Strong Employer Network",
  },
  {
    icon: icon4,
    title: "Dedicated Mentorship",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#071423] text-white py-16 md:py-20 px-6 md:px-12 lg:px-20">

      {/* TAG */}
      <div className="flex justify-center mb-6">
        <div className="px-5 py-1 rounded-full bg-white/10 backdrop-blur-lg border-t border-white/60 text-sm shadow">
          Choose Us
        </div>
      </div>

      {/* HEADING */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-4">
        Why to choose us
      </h2>

      {/* SUBTEXT */}
      <p className="text-center text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-10">
        Discover the advantages of partnering with us for structured guidance, expert mentorship,
        and reliable support throughout your USA career journey.
      </p>

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-10">

        {/* LEFT STAT */}
        <div className="text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-semibold">1000+</h3>
          <p className="text-gray-400 text-sm mt-1">
            IT Placements Annually
          </p>
        </div>

        {/* CENTER TEXT */}
        <div className="text-center text-gray-400 text-sm max-w-md mx-auto">
          ABCO Computers provided complete support from my master's admission to job placement.
          Their visa guidance and mentorship were clear, structured, and truly reliable.
          Highly recommended.
        </div>

        {/* RIGHT PROFILE */}
        <div className="flex items-center justify-center lg:justify-end gap-3">
          <img
            src={founder}
            alt="Founder"
            className=" object-cover "
          />
          <div>
            <p className="font-medium">Ashvik Kulkarni</p>
            <p className="text-gray-400 text-xs">Founder and CEO</p>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/90 mb-10"></div>

      {/* FEATURES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3">

            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={item.icon} alt="icon" />
            </div>

            {/* TEXT */}
            <p className="text-sm md:text-base text-gray-300 leading-snug">
              {item.title}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default WhyChoose;