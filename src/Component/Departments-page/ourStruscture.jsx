import React from "react";

const OurStructure = () => {
  return (
    <section className="w-full bg-[#060B14] text-white py-16 md:py-20 px-4 md:px-10 lg:px-20">

      {/* TAG */}
      <div className="flex justify-center mb-6">
        <div className="px-5 py-1 rounded-full 
        bg-white/10 backdrop-blur-md border border-white/20 
        text-gray-300 text-sm">
          Departments Work
        </div>
      </div>

      {/* HEADING */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-[24px] sm:text-[28px] md:text-[42px] font-semibold">
          A Structured System That Works
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Every department functions within a unified framework, ensuring seamless communication,
          accountability, and high-quality service delivery throughout your engagement.
        </p>
      </div>

      {/* FLOW */}
      <div className="relative max-w-6xl mx-auto">

        {/* ===== DESKTOP VIEW ===== */}
        <div className="hidden md:block">

          {/* ===== TOP ROW ===== */}
          <div className="flex justify-between items-center relative">

            <Step id="01" title="Admission" />
            <Step id="02" title="Visa & Legal" />
            <Step id="03" title="Training" />

            {/* CURVE 01 → 02 */}
            <svg className="absolute top-[25px] left-[22%] w-[180px]" viewBox="0 0 140 60">
              <path d="M0 20 Q70 70 140 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <polygon points="135,40 125,20 135,25" fill="white" transform="translate(6,-7)" />
            </svg>

            {/* CURVE 02 → 03 */}
            <svg className="absolute top-[-25px] left-[65%] w-[180px]" viewBox="0 0 150 60">
              <path d="M0 30 Q60 -20 130 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <polygon points="135,15 140,26 120,30" fill="white" transform="translate(2,-4)" />
            </svg>

          </div>

          {/* ===== BOTTOM ROW ===== */}
          <div className="flex justify-between items-center mt-24 relative">

            <Step id="06" title="Onboarding" />
            <Step id="05" title="Placement" />
            <Step id="04" title="Marketing" />

            {/* CURVE 03 → 04 */}
            <svg className="absolute top-[-100px] right-[-13%] w-[180px]" viewBox="30 10 120 100">
              <path d="M30 0 Q120 30 60 70" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <polygon points="55,65 65,75 55,75" fill="white" />
            </svg>

            {/* CURVE 04 → 05 */}
            <svg className="absolute top-[-40px] right-[21%] w-[180px]" viewBox="0 0 140 60">
              <path d="M140 30 Q70 -20 0 30" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <polygon points="-100,-20 -100,60 20,30" fill="white" />
            </svg>

            {/* CURVE 05 → 06 */}
            <svg className="absolute top-[35px] left-[25%] w-[180px]" viewBox="0 10 120 60">
              <path d="M150 20 Q70 70 -10 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <polygon points="10,20 -1,20 2,30" fill="white" transform="translate(0.5,5)" />
            </svg>

          </div>

        </div>

        {/* ===== MOBILE VIEW (WITH SIMPLE ARROWS) ===== */}
        <div className="flex flex-col gap-6 md:hidden items-center">

          {[
            "Admission",
            "Visa & Legal",
            "Training",
            "Marketing",
            "Placement",
            "Onboarding",
          ].map((title, i, arr) => (

            <div key={i} className="flex flex-col items-center">

              {/* STEP */}
              <div className="flex items-center gap-4">
                <div className="circle">{`0${i + 1}`}</div>
                <h3 className="title text-[18px]">{title}</h3>
              </div>

              {/* ARROW */}
              {i !== arr.length - 1 && (
                <div className="mt-3 text-white text-2xl opacity-70">
                  ↓
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

      {/* COMMON STYLES */}
      <style>{`
        .circle {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: black;
          border-radius: 50%;
          font-weight: 600;
          font-size: 18px;
        }

        .title {
          font-size: 32px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 18px;
          }
          .circle {
            width: 44px;
            height: 44px;
            font-size: 14px;
          }
        }
      `}</style>

    </section>
  );
};

// 🔥 Reusable Step Component
const Step = ({ id, title }) => (
  <div className="flex items-center gap-4">
    <div className="circle">{id}</div>
    <h3 className="title">{title}</h3>
  </div>
);

export default OurStructure;