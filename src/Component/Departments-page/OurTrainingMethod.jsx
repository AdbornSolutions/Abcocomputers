import React from "react";

const TrainingMethodTemplate = ({
  tag,
  heading,
  description,
  steps,
  arrowImg,
}) => {
  return (
    <section className="w-full bg-[#060B14] text-white py-20 px-6">

      {/* ===== TAG ===== */}
      {tag && (
        <div className="flex justify-center mb-6">
          <div className="px-5 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
            {tag}
          </div>
        </div>
      )}

      {/* ===== HEADING ===== */}
      <div className="text-center mb-16">
        <h2 className="text-[28px] md:text-[40px] font-semibold">
          {heading}
        </h2>

        {description && (
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            {description}
          </p>
        )}
      </div>

      {/* ===== DESKTOP FLOW ===== */}
      <div className="hidden md:flex relative max-w-[1300px] mx-auto items-center justify-between">

        {steps?.map((step, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center text-center w-[160px]"
          >

            {/* NUMBER */}
            <div className="w-12 h-12 flex items-center justify-center 
            bg-white text-black border border-black border-4 rounded-full text-sm font-semibold mb-2">
              {step.id}
            </div>

            {/* TITLE */}
            <p className="text-[16px] md:text-[19px] leading-snug">
              {step.title}
            </p>

            {/* ARROW */}
            {i !== steps.length - 1 && arrowImg && (
              <img
                src={arrowImg}
                alt="arrow"
                className="absolute top-16 left-[100%] w-[63px]"
              />
            )}

          </div>
        ))}

      </div>

      {/* ===== TABLET ===== */}
      <div className="hidden sm:grid md:hidden grid-cols-2 gap-6 mt-10 max-w-[600px] mx-auto">
        {steps?.map((step, i) => (
          <div key={i} className="flex items-center gap-3">

            <div className="w-10 h-10 flex items-center justify-center 
            bg-white text-black rounded-full text-sm font-semibold">
              {step.id}
            </div>

            <p className="text-[14px]">{step.title}</p>

          </div>
        ))}
      </div>

      {/* ===== MOBILE ===== */}
      <div className="flex sm:hidden flex-col gap-6 mt-10">
        {steps?.map((step, i) => (
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

export default TrainingMethodTemplate;