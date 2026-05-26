import React from "react";
import { Briefcase, CreditCard, Plane } from "lucide-react";
import strategyImg from "../../assets/home-page/strategy.png"; // your image
import strategyIcon from "../../assets/LearningPage/career.png";
import narrativeIcon from "../../assets/LearningPage/career2.png";

const Expertise = () => {
    return (
        <section className="w-full bg-[#060B14] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16">

            {/* 🔥 TOP GRADIENT CONTINUATION */}
            {/* <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 
      w-[1000px] h-[600px] bg-cyan-400/20 blur-[140px] rounded-full"></div> */}

            <div className="max-w-6xl mx-auto relative z-10">

                {/* TOP HEADER */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

                    <div>
                        <p className="text-cyan-400 text-xs tracking-[3px] mb-2">
                            EXPERTISE
                        </p>

                        <h2 className="text-[24px] md:text-[32px]  leading-tight">
                            Curated Services for <br />
                            the Ambitious Student
                        </h2>
                    </div>

                    <div className="text-white/70 text-m flex items-center">
                        We do more than guide applications; we shape strong academic journeys. Our student-focused support covers every step of your USA education pathway.
                    </div>

                </div>

                {/* MAIN GRID */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* BIG CARD */}
  <div className="relative 
  bg-gradient-to-br from-[#0f172a]  to-[#020617]
  border border-white/10 rounded-2xl p-6 
  flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 overflow-hidden
  shadow-[0_0_20px_rgba(0,255,255,0.05)]">

    {/* LEFT CURVED BORDER */}
    <div className="absolute inset-0 rounded-2xl border-l-[3px] border-l-white pointer-events-none"></div>

    <div className="pl-4">

      {/* ICON */}
      <div className="mb-3">
        <img
          src={strategyIcon}
          alt="icon"
          className="w-5 h-5 object-contain"
        />
      </div>

      <h3 className="text-lg mb-2">
        Career & University Strategy
      </h3>

      <p className="text-white/60 text-sm mb-3 max-w-xs">
        Go beyond basic counseling with a clear university roadmap based on your profile, goals, budget, and future career plans.
      </p>

      <span className="text-cyan-400 text-sm cursor-pointer">
        Learn more →
      </span>
    </div>

    <img
      src={strategyImg}
      alt=""
      className="w-full sm:w-32 h-32 sm:h-24 object-cover rounded-xl"
    />

  </div>

  {/* SIDE CARD */}
  <div className="
  bg-gradient-to-br from-[#0f172a]  to-[#020617]
  border border-white/10 rounded-2xl p-6
  shadow-[0_0_20px_rgba(0,255,255,0.05)]">

    {/* ICON */}
    <div className="mb-3">
      <img
        src={narrativeIcon}
        alt="icon"
        className="w-5 h-5 object-contain"
      />
    </div>

    <h3 className="text-lg mb-2">
      Narrative Building
    </h3>

    <p className="text-white/60 text-sm">
      Build a strong SOP, resume, and application story that highlights your goals.
    </p>

  </div>

</div>

                {/* BOTTOM GRID */}
               {/* BOTTOM GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">

  {[
    {
      icon: Briefcase,
      title: "Visa Precision",
      desc: "Get clear document support, visa guidance, and interview preparation.",
    },
    {
      icon: CreditCard,
      title: "Scholarship Hunting",
      desc: "Explore suitable scholarships and funding options for your study journey.",
    },
    {
      icon: Plane,
      title: "Arrival Support",
      desc: "Receive travel, accommodation, and pre-departure guidance for abroad study.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-gradient-to-br from-[#0f172a] 
      border border-white/10 rounded-2xl p-5
      shadow-[0_0_20px_rgba(0,255,255,0.05)]
      hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]
      transition duration-300"
    >

      {/* ICON */}
      <div className="mb-3 text-white/70">
        <item.icon size={25} />
      </div>

      {/* TITLE */}
      <p className="mb-2 font-heading text-white">
        {item.title}
      </p>

      {/* DESC */}
      <p className="text-white/60 text-sm">
        {item.desc}
      </p>

    </div>
  ))}

</div>

            </div>
        </section>
    );
};

export default Expertise;
