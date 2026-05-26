import React from "react";

// 👉 IMPORT IMAGES (Figma export paths)
import ieltsImg from "../../assets/LearningPage/item1.png";
import toeflImg from "../../assets/LearningPage/item2.png";
import pteImg from "../../assets/LearningPage/item3.png";
import greImg from "../../assets/LearningPage/item4.png";
import gmatImg from "../../assets/LearningPage/item5.png";
import spokenImg from "../../assets/LearningPage/item6.png";

const examData = [
  {
    title: "IELTS",
    tag: "IMMIGRATION",
    desc: "International English language testing support for study visas, university admission, and migration goals.",
    img: ieltsImg,
  },
  {
    title: "TOEFL",
    tag: "ADMISSIONS",
    desc: "Standardized English test preparation for students applying to universities in the USA and other countries.",
    img: toeflImg,
  },
  {
    title: "PTE Academic",
    tag: "VISA READY",
    desc: "Computer-based English test training for academic admissions, visa applications, and global study plans.",
    img: pteImg,
  },
  {
    title: "GRE",
    tag: "GRADUATE",
    desc: "Graduate-level exam preparation for master’s programs, scholarships, and competitive university admissions.",
    img: greImg,
  },
  {
    title: "GMAT",
    tag: "BUSINESS",
    desc: "Management admission test preparation for MBA and business school applications worldwide.",
    img: gmatImg,
  },
  {
    title: "Spoken English",
    tag: "FLUENCY",
    desc: "Improve fluency, pronunciation, confidence, and communication skills for interviews and academic success.",
    img: spokenImg,
  },
];

const InternationalExam = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-12 lg:px-20">
      
      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-body  mb-3">
          International Exam Categories
        </h2>
        <p className="text-gray-400 max-w-xl text-sm md:text-base">
          Choose your path to global opportunities with specialized preparation for leading international exams.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {examData.map((item, index) => (
          <div
            key={index}
            className="bg-[#0b1d2e] rounded-xl  p-4 hover:scale-[1.02] transition-all duration-300"
          >
            
            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[160px] object-cover"
              />
            </div>

            {/* TITLE + TAG */}
            <div className="flex items-center justify-between mb-2 mt-5">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <span className="text-[10px] px-2 py-1 rounded bg-white/10 text-gray-300">
                {item.tag}
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className=" text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default InternationalExam;