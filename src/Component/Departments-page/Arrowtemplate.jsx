import React from "react";
import arrowLeft from "../../assets/DepartmentPage/Arrow 30.png";
import arrowRight from "../../assets/DepartmentPage/Arrow 31.png";

const TimelineTemplate = ({
  titleSmall,
  titleMain,
  image,
  timelineItems,
}) => {
  return (
    <section className="w-full bg-[#060B14] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16">

      {/* ===== HEADING ===== */}
      <div className="mb-12 text-center lg:text-left">
        <p className="text-white text-[14px] sm:text-[18px] mb-2">
          {titleSmall}
        </p>

        <h2 className="text-[26px] sm:text-[36px] md:text-[46px] font-medium leading-tight 
        bg-[linear-gradient(95deg,_#FFFFFF_0.2%,_#2BD7D7_30%)] 
        bg-clip-text text-transparent">
          {titleMain}
        </h2>
      </div>

      {/* ===== MAIN GRID ===== */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ===== IMAGE ===== */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="timeline"
            className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[460px] object-contain"
          />
        </div>

        {/* ===== FLOW ===== */}
        <div className="relative flex flex-col gap-12 md:gap-16">

          {timelineItems.map((item, i) => (
            <div key={i} className="relative w-full">

              {/* 🔥 ZIGZAG (RIGHT START) */}
              <div
                className={`
                  max-w-[300px] sm:max-w-[340px]
                  ${
                    i % 2 === 0
                      ? "ml-auto text-right"   // ✅ START RIGHT
                      : "ml-0 text-left"
                  }
                `}
              >
                <h3 className="text-[15px] sm:text-[18px] font-semibold mb-1">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-[12px] sm:text-[13px] leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* 🔥 ARROWS (HIDE ON MOBILE) */}
              {i !== timelineItems.length - 1 && (
                <img
                  src={i % 2 === 0 ? arrowLeft : arrowRight}
                  alt="arrow"
                  className={`
                    hidden md:block absolute w-[90px] md:w-[110px]

                    ${
                      i % 2 === 0
                        ? "right-[55%] top-[40px] rotate-[20deg]"  // right → left
                        : "left-[60%] top-[40px] rotate-[-20deg]"   // left → right
                    }
                  `}
                />
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TimelineTemplate;