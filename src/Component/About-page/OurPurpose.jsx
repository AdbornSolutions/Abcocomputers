import React from "react";
import { FaChartBar, FaEye, FaFlag, FaHandshake, FaUsers } from "react-icons/fa";
import ScrollReveal from "../Common/ScrollReveal";

const values = [
  {
    icon: <FaHandshake />,
    title: "Highly Supportive",
    text: "We guide every candidate and client with clear communication, practical advice, and dependable support at each step.",
  },
  {
    icon: <FaUsers />,
    title: "Collaborative",
    text: "We work closely with people and businesses to understand their goals, build trust, and deliver the right solutions.",
  },
  {
    icon: <FaChartBar />,
    title: "Business Focused",
    text: "We respect every business requirement and create IT and staffing solutions that support performance and long-term growth.",
  },
];

const OurPurpose = () => {
  return (
    <section className="relative w-full bg-[#060B14] text-white py-20 px-4 sm:px-6 md:px-10 lg:px-12 overflow-hidden">
      <div className="absolute -top-20 left-0 w-full h-40 bg-[#060B14] blur-[14px] z-20"></div>
      <div className="absolute right-[-120px] top-[24%] h-[260px] w-[260px] bg-cyan-300/20 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <ScrollReveal variant="left" className="space-y-8">
          <span
            className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-gray-300 shadow premium-glass"
          >
            Our Purpose & Principles
          </span>

          <div>
            <h2 className="font-heading text-[34px] sm:text-[46px] md:text-[56px] leading-tight">
              Built to guide talent,
              <span className="block bg-[linear-gradient(95deg,_#FFFFFF_0.2%,_#2BD7D7_55%)] bg-clip-text text-transparent">
                support growth.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[14px] sm:text-[16px] leading-relaxed text-gray-300">
              ABCO Computers brings together career guidance, IT consulting,
              staffing support, and learning services to help professionals and
              businesses move with clarity and confidence.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-xl">
            {["Career", "Consulting", "Placement"].map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/[0.04] px-3 py-4 text-center"
              >
                <p className="text-[11px] sm:text-[13px] text-gray-400">{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {values.map((item, index) => (
            <ScrollReveal
              key={item.title}
              variant="right"
              delay={index * 120}
              className="group"
            >
              <div className="flex gap-4 border border-white/10 bg-[#0b1220] p-5 sm:p-6 transition duration-500 hover:border-cyan-300/40 hover:bg-white/[0.06]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-cyan-200 transition group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-xs text-cyan-200/70">
                      0{index + 1}
                    </span>
                    <h3 className="text-[18px] sm:text-[21px] font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[12px] sm:text-[14px] leading-relaxed text-gray-400">
                    {item.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-2">
        <ScrollReveal variant="left" delay={140}>
          <div className="h-full border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <FaEye className="text-cyan-200" />
              <h3 className="text-[20px] font-semibold">Our Vision</h3>
            </div>
            <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-400">
              To become a trusted global IT solutions and consulting partner
              known for innovation, quality services, career development, and
              customer satisfaction.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={240}>
          <div className="h-full border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <FaFlag className="text-cyan-200" />
              <h3 className="text-[20px] font-semibold">Our Mission</h3>
            </div>
            <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-400">
              To provide reliable IT solutions, career guidance, staffing
              services, and learning support that help businesses grow and
              professionals build successful careers in the USA IT industry.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute -bottom-20 left-0 w-full h-40 bg-[#060B14] blur-[14px] z-20"></div>
    </section>
  );
};

export default OurPurpose;
