import React from "react";

const Types = () => {
  return (
    <section className="w-full bg-[#060B14] text-white py-20 px-6 md:px-12 lg:px-20">

      {/* TAG */}
      <div className="flex justify-center mb-6">
        <span className="px-5 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
          Document Required
        </span>
      </div>

      {/* HEADING */}
      <h2 className="text-center text-[26px] md:text-[34px] lg:text-[38px] font-semibold mb-16">
        Documents Required for H1B Visa Application
      </h2>

      {/* 🔥 MAIN WRAPPER */}
      <div className="relative max-w-6xl mx-auto">

        {/* 🔥 HORIZONTAL CENTER LINE */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full border-2 border-dashed border-white/90"></div>

        {/* 🔥 VERTICAL LINES */}
        <div className="hidden md:block absolute top-0 left-1/3 h-full border-2 border-dashed border-white/90"></div>
        <div className="hidden md:block absolute top-0 left-2/3 h-full border-2 border-dashed border-white/90"></div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-3 gap-y-16 relative z-10">

          {/* COLUMN 1 */}
          <div className="flex flex-col gap-16">
            <Item text="Employer’s job offer letter" />
            <Item text="Labor Condition Application (LCA)" />
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-16 items-center">
            <Item text="Your resume or CV" />
            <Item text="USCIS forms (I-129)" />
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-16 items-end">
            <Item text="Proof of educational qualifications" />
            <Item text="Copies of passports and visa history" />
          </div>

        </div>

      </div>

    </section>
  );
};


/* 🔥 SINGLE ITEM */
const Item = ({ text }) => {
  return (
    <div className="flex items-center gap-4 max-w-[260px]">

      {/* DOT */}
      <div className="w-8 h-8 bg-white rounded-full flex-shrink-0"></div>

      {/* TEXT */}
      <p className="text-[14px] md:text-[18px] text-gray-300 leading-snug">
        {text}
      </p>

    </div>
  );
};

export default Types;