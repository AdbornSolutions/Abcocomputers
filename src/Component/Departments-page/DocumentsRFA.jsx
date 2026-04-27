import React from "react";

import leftImg from "../../assets/DepartmentPage/DRFA/left-bottom.png";
import rightImg from "../../assets/DepartmentPage/DRFA/right.png";
import stepsImg from "../../assets/DepartmentPage/DRFA/steps.png";

const steps = [
  {
    title: "Academic Transcripts",
    desc: "Official transcripts from all previously attended institutions.",
  },
  {
    title: "Degree Certificates",
    desc: "Copies of completed degree certificates or provisional documents.",
  },
  {
    title: "English Proficiency Scores",
    desc: "Valid IELTS, TOEFL, or equivalent test results required by universities.",
  },
  {
    title: "Passport Copy",
    desc: "A valid passport with clear identification and expiry details.",
  },
  {
    title: "Updated Resume",
    desc: "An academic or professional resume highlighting qualifications and experience.",
  },
  {
    title: "Recommendation Letters",
    desc: "Letters of recommendation from academic professors or professional supervisors.",
  },
];

const DocumentsRFA = () => {
  return (
    <section className="w-full bg-[#060B14] text-white py-20 px-4 md:px-10 lg:px-20 overflow-hidden">

      {/* ===== HEADING ===== */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-[26px] md:text-[42px] font-semibold">
          Documents Required for Admission
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Prepare the following essential documents to ensure a smooth and efficient admission process.
        </p>
      </div>

      {/* ===== DESKTOP VIEW (UNCHANGED) ===== */}
      <div className="hidden md:block relative max-w-6xl mx-auto">

        {/* LEFT IMAGE */}
        <img
          src={leftImg}
          className="absolute left-[-130px] bottom-[-100px] w-[420px]"
        />

        {/* RIGHT IMAGE */}
        <img
          src={rightImg}
          className="absolute right-[-135px] top-[-120px] w-[434px]"
        />

        {/* STEPS IMAGE */}
        <div className="relative flex justify-center">
          <img
            src={stepsImg}
            alt="steps"
            className="w-full max-w-[1300px]"
          />

          {/* TEXT OVERLAY */}
          <div className="absolute inset-0">

            <div className="absolute top-[4%] left-[1%] w-[250px]">
              <h3 className="font-semibold text-[20px]">Academic Transcripts</h3>
              <p className="text-xs text-gray-400">{steps[0].desc}</p>
            </div>

            <div className="absolute top-[18.5%] left-[14%] w-[250px]">
              <h3 className="font-semibold text-[20px]">Degree Certificates</h3>
              <p className="text-xs text-gray-400">{steps[1].desc}</p>
            </div>

            <div className="absolute top-[32%] left-[28.2%] w-[250px]">
              <h3 className="font-semibold text-[20px]">English Proficiency Scores</h3>
              <p className="text-xs text-gray-400">{steps[2].desc}</p>
            </div>

            <div className="absolute top-[50%] left-[42.5%] w-[250px]">
              <h3 className="font-semibold">Passport Copy</h3>
              <p className="text-xs text-gray-400">{steps[3].desc}</p>
            </div>

            <div className="absolute top-[64%] left-[61.5%] w-[250px]">
              <h3 className="font-semibold">Updated Resume</h3>
              <p className="text-xs text-gray-400">{steps[4].desc}</p>
            </div>

            <div className="absolute top-[76%] left-[82%] w-[250px]">
              <h3 className="font-semibold">Recommendation Letters</h3>
              <p className="text-xs text-gray-400">{steps[5].desc}</p>
            </div>

          </div>
        </div>
      </div>

      {/* ===== MOBILE VIEW ===== */}
      <div className="md:hidden flex flex-col gap-6 max-w-md mx-auto">

        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-start">

            {/* STEP CARD */}
            <div className="bg-[#0b1220] border border-white/10 rounded-lg p-4 w-full">
              <h3 className="font-semibold text-[16px] mb-1">
                {step.title}
              </h3>
              <p className="text-gray-400 text-[13px]">
                {step.desc}
              </p>
            </div>

            {/* ARROW */}
            {i !== steps.length - 1 && (
              <div className="flex justify-center w-full my-2">
                <span className="text-xl text-white">↓</span>
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
};

export default DocumentsRFA;