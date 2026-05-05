import React from "react";

import icon1 from "../../assets/DepartmentPage/ContractManage/1.png";
import icon2 from "../../assets/DepartmentPage/ContractManage/2.png";
import icon3 from "../../assets/DepartmentPage/ContractManage/3.png";
import icon4 from "../../assets/DepartmentPage/ContractManage/4.png";
import icon5 from "../../assets/DepartmentPage/ContractManage/5.png";
import icon6 from "../../assets/DepartmentPage/ContractManage/6.png";

import arrow from "../../assets/DepartmentPage/CurvedArrow.png";

const steps = [
  { icon: icon1, title: "Initial Requirement Gathering" },
  { icon: icon2, title: "Drafting & Negotiation" },
  { icon: icon3, title: "Review & Compliance Check" },
  { icon: icon4, title: "Finalization & Signing" },
  { icon: icon5, title: "Document Storage & Tracking" },
  { icon: icon6, title: "Ongoing Management & Renewals" },
];

const ContractManagement = () => {
  return (
    <section className="w-full bg-[#060B14] text-white py-20 px-6">

      {/* TAG */}
      <div className="flex justify-center mb-6">
        <div className="px-5 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
          Contract Management Process
        </div>
      </div>

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-[28px] md:text-[38px] font-semibold">
          Step-by-Step Contract Management Process
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          A transparent, structured approach to ensure smooth, compliant, and accurate contract management from initial gathering to ongoing renewal.
        </p>
      </div>

      {/* 🔥 FLOW */}
      <div className="hidden md:flex relative max-w-[1200px] mx-auto items-center justify-between">

        {steps.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center text-center w-[160px]">

            {/* ICON */}
            <div className="w-14 h-14 flex items-center justify-center 
            bg-white rounded-full mb-3">
              <img src={step.icon} className="w-6 h-6" />
            </div>

            {/* TITLE */}
            <p className="text-[13px] md:text-[14px] leading-snug">
              {step.title}
            </p>

            {/* 🔥 ARROW */}
            {i !== steps.length - 1 && (
              <img
                src={arrow}
                alt="arrow"
                className="absolute top-4 left-[85%] w-[60px] opacity-80"
              />
            )}

          </div>
        ))}

      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden flex flex-col gap-6 mt-10">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-3">

            <div className="w-10 h-10 flex items-center justify-center 
            bg-white rounded-full">
              <img src={step.icon} className="w-5 h-5" />
            </div>

            <p className="text-[14px]">{step.title}</p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default ContractManagement;
