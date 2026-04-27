import React from "react";
import arrow from "../../assets/DepartmentPage/Arrow 19.png";

const ProcessFlow = ({ tag, heading, subheading, steps }) => {
  return (
    <section className="w-full bg-[#060B14] text-white py-16 md:py-20 px-4 md:px-8 lg:px-16">

      {/* TAG */}
      <div className="flex justify-center mb-6">
        <div className="px-5 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
          {tag}
        </div>
      </div>

      {/* HEADING */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold">
          {heading}
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-[13px] sm:text-[14px] md:text-[15px]">
          {subheading}
        </p>
      </div>

      {/* ===== DESKTOP VIEW ===== */}
      <div className="hidden md:block relative max-w-[1400px] mx-auto">

        {/* TOP ROW */}
        <div className="grid grid-cols-3 gap-16 items-center">
          <Card step={steps[0]} highlight />
          <Card step={steps[1]} />
          <Card step={steps[2]} />
        </div>

        {/* TOP ARROWS */}
        <img src={arrow} className="absolute top-[80px] left-[31%] w-[40px]" />
        <img src={arrow} className="absolute top-[80px] left-[66%] w-[40px]" />

        {/* CURVE */}
        <svg
          className="absolute right-[-80px] top-[160px] w-[110px]"
          viewBox="0 0 100 120"
        >
          <path d="M10 0 Q90 50 40 115" stroke="white" strokeWidth="2" fill="none" />
          <polygon points="35,110 45,120 30,118" fill="white" />
        </svg>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-3 gap-16 mt-20 items-center">
          <Card step={steps[3]} />
          <Card step={steps[4]} />
          <Card step={steps[5]} />
        </div>

        {/* BOTTOM ARROWS */}
        <img src={arrow} className="absolute top-[310px] left-[31%] w-[40px] rotate-180" />
        <img src={arrow} className="absolute top-[310px] left-[66%] w-[40px] rotate-180" />

      </div>

      {/* ===== TABLET VIEW ===== */}
      <div className="hidden sm:grid md:hidden grid-cols-2 gap-6 max-w-[700px] mx-auto mt-10">
        {steps.map((step, i) => (
          <Card key={i} step={step} />
        ))}
      </div>

      {/* ===== MOBILE VIEW ===== */}
      <div className="flex sm:hidden flex-col gap-6 mt-10">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">

            <div className="w-10 h-10 flex items-center justify-center 
            bg-white text-black rounded-full text-sm font-semibold">
              {step.id}
            </div>

            <h3 className="text-[15px] font-semibold">{step.title}</h3>

          </div>
        ))}
      </div>

    </section>
  );
};


/* ===== CARD ===== */
const Card = ({ step, highlight }) => {
  return (
    <div
      className={`w-full max-w-[420px] mx-auto p-5 rounded-[16px] min-h-[150px]
      ${highlight
        ? "border border-white bg-transparent"
        : "bg-[#0b1220] border border-white/10"
      }`}
    >

      {/* ICON + TITLE */}
      <div className="flex items-center gap-3 mb-3">

        <div className="w-10 h-10 flex items-center justify-center 
        bg-white text-black rounded-full text-sm font-semibold flex-shrink-0">
          {step.id}
        </div>

        <h3 className="text-[15px] md:text-[16px] font-semibold underline">
          {step.title}
        </h3>

      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-400 text-[12px] md:text-[13px] leading-relaxed">
        {step.desc}
      </p>

    </div>
  );
};

export default ProcessFlow;