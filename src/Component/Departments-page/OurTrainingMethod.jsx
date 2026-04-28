import React from "react";
import CurveArrow from "../../assets/DepartmentPage/curved.png";

const steps = [
  { id: "01", title: "Skill Assessment" },
  { id: "02", title: "Customized Learning Plan" },
  { id: "03", title: "Hands-On Project Training" },
  { id: "04", title: "Real-World Case Studies" },
  { id: "05", title: "Mocks Interviews" },
  { id: "06", title: "Placement Readiness" },
];

const OurTrainingMethod = () => {
  return (
    <section className="w-full bg-[#060B14] text-white py-20 px-6">

      {/* TAG */}
      <div className="flex justify-center mb-6">
        <div className="px-5 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
          Our Training Methodology
        </div>
      </div>

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-[28px] md:text-[40px] font-semibold">
          Our Structured Learning Process
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          A step-by-step approach that guides students through personalized skill
          assessments, hands-on training, real-world experience, and placement
          readiness to prepare them for career success.
        </p>
      </div>

      {/* ===== FLOW ===== */}
      <div className="relative max-w-[1300px] mx-auto flex items-center justify-between">

        {steps.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center text-center w-[160px]">

            {/* NUMBER CIRCLE */}
            <div className="w-12 h-12 flex items-center justify-center 
            bg-white text-black border border-black border-4 rounded-full text-sm font-semibold mb-2">
              {step.id}
            </div>

            {/* TITLE */}
            <p className="text-[16px] md:text-[20px] leading-snug">
              {step.title}
            </p>

            {/* 🔥 CURVE ARROW */}
            {i !== steps.length - 1 && (
              <img
                src={CurveArrow}
                alt="arrow"
                className="absolute top-16 left-[105%] w-[65px]"
              />
            )}

          </div>
        ))}

      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden flex flex-col gap-6 mt-10 items-start">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">

            <div className="w-10 h-10 flex items-center justify-center 
            bg-white text-black rounded-full text-sm font-semibold">
              {step.id}
            </div>

            <p className="text-[14px]">{step.title}</p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default OurTrainingMethod;