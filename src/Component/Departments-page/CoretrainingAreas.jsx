import React from "react";

import Image1 from "../../assets/DepartmentPage/CoretrainingAreas/1.png";
import Image2 from "../../assets/DepartmentPage/CoretrainingAreas/2.png";
import Image3 from "../../assets/DepartmentPage/CoretrainingAreas/3.png";
import Image4 from "../../assets/DepartmentPage/CoretrainingAreas/4.png";
import Image5 from "../../assets/DepartmentPage/CoretrainingAreas/5.png";
import Image6 from "../../assets/DepartmentPage/CoretrainingAreas/6.png";

import Arrow from "../../assets/DepartmentPage/Arrow 19.png";

const data = [
  {
    img: Image1,
    title: "Software Development",
    desc: "Comprehensive training in modern programming languages, frameworks, and development practices focused on real-world application building.",
  },
  {
    img: Image2,
    title: "Data & Analytics",
    desc: "Hands-on experience in data analysis, visualization tools, and business intelligence techniques for data-driven decision-making.",
  },
  {
    img: Image3,
    title: "Quality Assurance",
    desc: "Structured learning of testing methodologies, automation frameworks, and software quality best practices.",
  },
  {
     img: Image6,
    title: "Career Preparation",
    desc: "Resume optimization, interview simulation, and strategic job-market positioning to enhance placement readiness.",  },
  {
    img: Image5,
    title: "Cybersecurity",
    desc: "Training in security principles, risk management, compliance standards, and foundational protection strategies.",
  },
  {
   img: Image4,
    title: "Cloud & DevOps",
    desc: "Practical exposure to cloud platforms, deployment pipelines, infrastructure automation, and scalable system architecture.",
  },
];

const CoretrainingAreas = () => {
  return (
    <section className="w-full bg-[#060B14] text-white py-20 px-6">

      {/* TAG */}
      <div className="flex justify-center mb-6">
        <div className="px-5 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-sm">
          Core Training Areas
        </div>
      </div>

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-[30px] md:text-[40px] font-semibold">
          Specialized Technical Training Programs
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Industry-aligned skill development designed to prepare professionals for real-world IT challenges.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="hidden md:block relative max-w-[1300px] mx-auto">

        {/* ===== TOP ROW ===== */}
        <div className="grid md:grid-cols-3 gap-16 items-center">

          <Card data={data[0]} highlight />
          <Card data={data[1]} />
          <Card data={data[2]} />

        </div>

        {/* ARROWS TOP */}
        <img src={Arrow} className="hidden md:block absolute top-[90px] left-[66%] w-[40px]" />

        {/* DOWN ARROWS */}
        <div className="hidden md:block">
          <img
          src={Arrow}
          className="absolute left-[15%] top-[220px] w-[40px] rotate-90"
        />
          <img
          src={Arrow}
          className="absolute right-[15%] top-[220px] w-[40px] rotate-90"
        />
          <img
          src={Arrow}
          className="absolute right-[49%] top-[220px] w-[40px] -rotate-90"
        />
        </div>

        {/* ===== BOTTOM ROW ===== */}
        <div className="grid md:grid-cols-3 gap-16 mt-20 items-center">

          <Card data={data[3]} />
          <Card data={data[4]} />
          <Card data={data[5]} />

        </div>

        {/* ARROWS BOTTOM */}
        <img
          src={Arrow}
          className="hidden md:block absolute top-[320px] left-[31%] w-[40px] rotate-180"
        />
        

      </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col gap-6 mt-10">
        {data.map((item, i) => (
          <Card key={i} data={item} />
        ))}
      </div>

    </section>
  );
};


/* ===== CARD ===== */
const Card = ({ data, highlight }) => {
  return (
    <div
      className={`p-6 rounded-[16px] min-h-[180px]
      ${highlight
        ? "border border-white bg-transparent"
        : "bg-[#0b1220] border border-white/10"
      }`}
    >
      {/* ICON + TITLE */}
      <div className="flex items-center gap-3 mb-3">

        <div className="w-10 h-10 flex items-center justify-center 
        bg-white rounded-full flex-shrink-0">
          <img src={data.img} className="w-5 h-5" />
        </div>

        <h3 className="text-[16px] font-semibold underline">
          {data.title}
        </h3>

      </div>

      {/* DESC */}
      <p className="text-gray-400 text-[13px] leading-relaxed">
        {data.desc}
      </p>

    </div>
  );
};

export default CoretrainingAreas;
