import React from "react";

const AboutServiceSection = ({
  tag,
  heading,
  description1,
  description2,
  description3,
  buttonText,
  image,
  reverse = false, // 🔥 layout change option
}) => {
  return (
    <section className="w-full bg-[#060B14] text-white py-16 px-4 md:px-10 lg:px-20">

      <div className={`grid md:grid-cols-2 gap-10 items-center 
        ${reverse ? "md:flex-row-reverse" : ""}`}>

        {/* ===== LEFT CONTENT ===== */}
        <div>

          {/* TAG */}
          <div className="inline-block px-4 py-1 mb-5 rounded-full 
          bg-white/10 backdrop-blur-md border border-white/20 
          text-gray-300 text-sm">
            {tag}
          </div>

          {/* HEADING */}
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold leading-tight mb-6">
            {heading}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-[14px] md:text-[16px] leading-relaxed mb-5">
            {description1}
          </p>

          <p className="text-gray-400 text-[14px] md:text-[16px] leading-relaxed">
            {description2}
          </p>


          {/* DESCRIPTION 2 */}
{Array.isArray(description3) ? (
  <ul className="text-gray-400 text-[14px] md:text-[16px] leading-relaxed space-y-2">
    {description3.map((point, i) => (
      <li key={i} className="flex gap-2">
        <span className="text-[#2BD7D7]">•</span>
        <span>{point}</span>
      </li>
    ))}
  </ul>
) : (
  <p className="text-gray-400 text-[14px] md:text-[16px] leading-relaxed">
    {description3}
  </p>
)}


          {/* BUTTON */}
          <button className="mt-6 px-6 py-2 rounded-full 
          border border-[#2BD7D7] text-[#2BD7D7] 
          hover:bg-[#2BD7D7]/10 transition">
            {buttonText}
          </button>

        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="service"
            className="w-full max-w-[320px] md:max-w-[380px] object-contain"
          />
        </div>

      </div>

    </section>
  );
};

export default AboutServiceSection;