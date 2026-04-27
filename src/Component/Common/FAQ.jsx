import React, { useState } from "react";
import faqImg from "../../assets/common-images/Frame 49 (1).png";

const FAQ = ({ tag, heading, description, questions }) => {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full h-auto bg-[#060B14] text-white py-16 px-4 md:px-10 lg:px-20">

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

        {/* ===== LEFT CONTENT ===== */}
        <div>

          {/* TAG */}
          <div className="mb-4">
            <span className="px-5 py-1 rounded-full 
            bg-white/10 backdrop-blur-md border border-white/20 
            text-gray-300 text-sm">
              {tag}
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-[28px] md:text-[40px] font-semibold mb-4">
            {heading}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md">
            {description}
          </p>

          {/* QUESTIONS */}
          <div className="space-y-4">

            {questions.map((q, i) => (
              <div key={i} className="border-b border-white/20 pb-3">

                {/* QUESTION */}
                <div
                  onClick={() => setActive(active === i ? null : i)}
                  className="flex justify-between items-center cursor-pointer group"
                >
                  <h3 className="text-[15px] md:text-[16px]">
                    {q.question}
                  </h3>

                  <span className="text-xl transition group-hover:translate-x-1">
                    →
                  </span>
                </div>

                {/* ANSWER */}
                {active === i && (
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {q.answer}
                  </p>
                )}

              </div>
            ))}

          </div>

        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="flex justify-center md:justify-end">
          <img
            src={faqImg}
            alt="FAQ"
            className="w-[280px] sm:w-[320px] md:w-[380px] object-contain"
          />
        </div>

      </div>

    </section>
  );
};

export default FAQ;