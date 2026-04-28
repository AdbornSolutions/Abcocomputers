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
    desc: "International English Language Testing System recognized for migration and study in USA.",
    img: ieltsImg,
  },
  {
    title: "TOEFL",
    tag: "ADMISSIONS",
    desc: "Standardized test of English as a Foreign Language for university admissions across North America and Europe.",
    img: toeflImg,
  },
  {
    title: "PTE Academic",
    tag: "VISA READY",
    desc: "Pearson Test of English Academic for study abroad and visa applications with fast, AI-based results.",
    img: pteImg,
  },
  {
    title: "GRE",
    tag: "GRADUATE",
    desc: "Graduate Record Examinations for diverse graduate school programs and merit-based scholarship opportunities.",
    img: greImg,
  },
  {
    title: "GMAT",
    tag: "BUSINESS",
    desc: "Graduate Management Admission Test for top-tier global business school success and MBA placements.",
    img: gmatImg,
  },
  {
    title: "Spoken English",
    tag: "FLUENCY",
    desc: "Master communication, pronunciation, and fluency for professional growth and international confidence.",
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
          Choose your path to global opportunities with our specialized curriculum for world-renowned certifications.
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