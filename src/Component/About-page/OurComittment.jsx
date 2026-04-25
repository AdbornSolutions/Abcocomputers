import React from "react";

const OurCommitment = () => {
  const timelineItems = [
    {
      side: "right",
      title: "Choose ABCO Computers",
      text: "Our extensive network of highly skilled IT professionals ensures that we connect you with top talent perfectly aligned with your business requirements."
    },
    {
      side: "left",
      title: "Our Expertise",
      text: "We bring deep industry knowledge and years of experience, helping organizations solve complex challenges with innovative IT solutions."
    },
    {
      side: "right",
      title: "Our Team",
      text: "A passionate team of professionals committed to delivering excellence, innovation, and long-term value in every engagement."
    },
    {
      side: "left",
      title: "Quality Delivery",
      text: "We follow strict quality standards and proven processes to ensure consistent, reliable, and high-performing results."
    },
    {
      side: "right",
      title: "Beyond Staffing",
      text: "We go beyond staffing by offering complete IT solutions, including consulting, development, and managed services."
    },
    {
      side: "left",
      title: "Sustainable Growth",
      text: "Our solutions are designed to support long-term scalability, helping your business grow efficiently and sustainably."
    },
  ];

  return (
    <section className="w-full bg-[#060B14] text-white py-16 px-6 md:px-16">

      {/* ===== HEADING ===== */}
      <div className="mb-10">
        <p className="text-gray-400 text-sm mb-2">Our</p>
        <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight">
          Commitment to <span className="text-[#2BD7D7]">Excellence</span>
        </h2>
      </div>

      {/* ===== MAIN GRID ===== */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">

        {/* ===== LEFT (BIG SHAPES) ===== */}
        <div className="hidden lg:flex justify-center">
          <div className="grid grid-cols-2 gap-8">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-8 items-center">
              <div className="w-[160px] h-[360px] bg-[#FFFF] rounded-full" />
              <div className="w-[180px] h-[180px] bg-[#FFFF] rounded-full" />
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-8 items-center mt-16">
              <div className="w-[180px] h-[180px] bg-[#FFFF] rounded-full" />
              <div className="w-[160px] h-[360px] bg-[#FFFF] rounded-full" />
            </div>

          </div>
        </div>

        {/* ===== RIGHT (ZIG-ZAG TIMELINE) ===== */}
        <div className="relative -mt-32"> {/* 👈 UPPER SHIFT */}

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[5px] bg-white -translate-x-1/2"></div>

          {timelineItems.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-center mb-10 ${
                item.side === "right"
                  ? "justify-start pl-[55%]"
                  : "justify-end pr-[55%]"
              }`}
            >

              {/* DOT */}
              <div className="absolute left-1/2 -translate-x-1/2 w-[20px] h-[20px] bg-black border-4 rounded-full z-10" />

              {/* CONTENT */}
              <div className={`max-w-[260px] ${item.side === "left" ? "text-right" : "text-left"}`}>
                <h3 className="text-[16px] font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[12px] leading-relaxed">
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

export default OurCommitment;