import React from "react";

const TimelineTemplate = ({ titleSmall, titleMain, image, timelineItems }) => {
  return (
    <section className="w-full bg-[#060B14] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16">

      {/* ===== HEADING ===== */}
      <div className="mb-10">
        <p className="text-white text-[16px] sm:text-[24px] mb-2">
          {titleSmall}
        </p>

        <h2 className="text-[32px] sm:text-[44px] md:text-[52px] font-medium leading-tight 
        bg-[linear-gradient(95deg,_#FFFFFF_0.2%,_#2BD7D7_30%)] 
        bg-clip-text text-transparent">
          {titleMain}
        </h2>
      </div>

      {/* ===== MAIN GRID ===== */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* 🔥 LEFT IMAGE (REPLACED SHAPES) */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="timeline"
            className="w-full max-w-[420px] object-contain"
          />
        </div>

        {/* ===== TIMELINE ===== */}
        <div className="relative -mt-10 md:-mt-32">

          {/* CENTER LINE */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 
          w-[2px] bg-white md:-translate-x-1/2"></div>

          {timelineItems.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-start mb-10 md:items-center
              ${
                item.side === "right"
                  ? "md:justify-start md:pl-[55%]"
                  : "md:justify-end md:pr-[55%]"
              }`}
            >

              {/* DOT */}
              <div className="absolute left-4 md:left-1/2 
              w-[12px] h-[12px] md:w-[18px] md:h-[18px] 
              bg-black border-2 border-white rounded-full 
              md:-translate-x-1/2 z-10" />

              {/* CONTENT */}
              <div className="ml-10 md:ml-0 max-w-[260px] text-left">

                <h3 className="text-[14px] sm:text-[18px] font-semibold mb-1">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-[11px] sm:text-[12px] leading-relaxed">
                  {item.text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TimelineTemplate;