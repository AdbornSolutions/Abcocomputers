import React, { useState } from "react";
import faqImg from "../../assets/common-images/Frame 49 (1).png";

const FAQ = ({ tag, heading, description, questions = [] }) => {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full bg-[#060B14] text-white py-16 px-4 md:px-10 lg:px-20">

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

        {/* LEFT */}
        <div>

          <div className="mb-4">
            <span className="px-5 py-1 rounded-full 
            bg-white/10 border border-white/20 text-gray-300 text-sm">
              {tag}
            </span>
          </div>

          <h2 className="text-[28px] md:text-[40px] font-semibold mb-4">
            {heading}
          </h2>

          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md">
            {description}
          </p>

          {/* QUESTIONS */}
          <div className="space-y-4">

            {questions.length === 0 ? (
              <p className="text-gray-500 text-sm">No FAQs available</p>
            ) : (
              questions.map((q, i) => (
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
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      active === i ? "max-h-[200px] mt-2" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {q.answer}
                    </p>
                  </div>

                </div>
              ))
            )}

          </div>

        </div>

        {/* RIGHT IMAGE */}
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