import React from "react";

const steps = [
  { id: "01", title: "Understand the Interview Format" },
  { id: "02", title: "Organize Your Documents" },
  { id: "03", title: "Be Honest and Transparent" },
  { id: "04", title: "Prepare for Common Questions" },
  { id: "05", title: "Stay Calm and Confident" },
  { id: "06", title: "Familiarize Yourself with Your Application" },
];

const WhyChoose5 = () => {
  return (
    <section className="bg-[#060B14] text-white py-16 md:py-20 px-6 md:px-12 lg:px-20">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <div className="mb-4">
            <span className="px-5 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
              Interview Tips
            </span>
          </div>

          <h2 className="text-[28px] md:text-[36px] font-semibold leading-tight mb-4">
            <span className="underline">Green Card Interview</span> <br />
            Preparation
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
            Preparing for the Green Card interview is vital to securing your status.
            Our experts will guide you every step of the way, helping you handle
            the most common questions and presenting yourself with confidence.
          </p>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="flex flex-col gap-5">

          {/* 🔥 TOP ROW (1,2,3) */}
          <div className="grid grid-cols-3 gap-4">
            {steps.slice(0, 3).map((step, i) => (
              <Card key={i} step={step} />
            ))}
          </div>

          {/* 🔥 BOTTOM ROW (6,5,4) */}
          <div className="grid grid-cols-3 gap-4">
            {[steps[5], steps[4], steps[3]].map((step, i) => (
              <Card key={i} step={step} />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};


/* 🔥 CARD */
const Card = ({ step }) => {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-[16px] p-5 
    hover:border-[#2BD7D7]/40 transition duration-300 
    hover:shadow-[0_0_20px_rgba(43,215,215,0.15)] min-h-[120px]">

      {/* NUMBER */}
      <div className="w-10 h-10 mb-3 flex items-center justify-center 
      bg-white text-black rounded-full text-sm font-semibold">
        {step.id}
      </div>

      {/* TITLE */}
      <h3 className="text-[13px] md:text-[14px] leading-snug text-gray-300">
        {step.title}
      </h3>

    </div>
  );
};

export default WhyChoose5;