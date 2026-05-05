import React from "react";

// 🔥 COMMON
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import Contact from "../../Component/Common/Contact";
import FAQ from "../../Component/Common/FAQ";

// 🔥 DEPARTMENT COMPONENTS
import DepartmentHero from "../../Component/Departments-page/DHeroSec";
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";
import CoretrainingAreas from "../../Component/Departments-page/CoretrainingAreas";
import TrainingMethodTemplate from "../../Component/Departments-page/OurTrainingMethod";
import WhyChooseOurAT from "../../Component/Departments-page/WhyChooseOurAT";
import Counter from "../../Component/Common/Counter"; // path adjust kar

// 🔥 IMAGE
import trainingImg from "../../assets/DepartmentPage/AboutthisServices.png"; // apna image path dal
import ToolsTech from "../../Component/Departments-page/Tools&Tech";
import CurveArrow from "../../assets/DepartmentPage/curved.png";


import i1 from "../../assets/DepartmentPage/WHYchooseOAT/1.png";
import i2 from "../../assets/DepartmentPage/WHYchooseOAT/2.png";
import i3 from "../../assets/DepartmentPage/WHYchooseOAT/3.png";
import i4 from "../../assets/DepartmentPage/WHYchooseOAT/4.png";
import i5 from "../../assets/DepartmentPage/WHYchooseOAT/5.png";

const steps = [
  { id: "01", title: "Skills Assessments" },
  { id: "02", title: "Customized Learning Plan" },
  { id: "03", title: "Hands-On Project Training" },
  { id: "04", title: "Real-World Case Studies" },
  { id: "05", title: "Mocks Interviews" },
  { id: "06", title: "Placement Readiness" },
];


const data = [
  {
    icon: i1,
    title: "Strategic University Matching",
    desc: "We align your profile with best universities.",
    highlight: true,
  },
  {
    icon: i3,
    title: "Error-Free Documentation",
    desc: "We ensure zero mistakes in documents.",
  },
  {
    icon: i4,
    title: "Error-Free Documentation",
    desc: "We ensure zero mistakes in documents.",
  },
  {
    icon: i5,
    title: "Error-Free Documentation",
    desc: "We ensure zero mistakes in documents.",
  },
  {
    icon: i2,
    title: "Error-Free Documentation",
    desc: "We ensure zero mistakes in documents.",
  },
];

// 🔥 FAQ DATA
const faqData = [
  {
    question: "Do I need prior IT experience?",
    answer:
      "No, our programs are designed for both beginners and experienced professionals with structured learning paths.",
  },
  {
    question: "Is training online or offline?",
    answer:
      "We offer flexible training modes including online, hybrid, and offline sessions depending on your preference.",
  },
  {
    question: "How long is the program?",
    answer:
      "Program duration varies between 3 to 6 months depending on the specialization and learning pace.",
  },
  {
    question: "Is placement assistance included?",
    answer:
      "Yes, we provide complete placement support including resume building, mock interviews, and job assistance.",
  },
];

const Training = () => {
  return (
    <>
      <Navbar />

      {/* 🔥 HERO */}
      <DepartmentHero
        breadcrumb="Department > Training Department"
        heading="Industry-Focused IT Training Excellence"
        description="Our Training Department equips candidates with industry-relevant technical skills, practical project experience, and career-oriented preparation to succeed in the competitive U.S. IT job market."
        primaryBtn="Explore Training Programs"
        secondaryBtn="Start Skill Assessment"
      />
      {/* ===== STATS ===== */}
      <div
    className="bg-[#060B14] flex flex-wrap justify-center items-center gap-3 sm:gap-4 px-4 text-center text-[14px] sm:text-[18px] md:text-[24px] text-gray-300"
    style={{
      fontFamily: "Merienda One",
      fontWeight: 400,
      fontSize: "clamp(14px, 4vw, 24px)",
      lineHeight: "100%",
      letterSpacing: "0%",
    }}
  >

  <div className="flex items-center gap-1">
    <Counter end={1000} /> 
    <span>Professionals Trained</span>
  </div>

  <span className="hidden sm:block">|</span>

  <div>
    High Placement Success Rate
  </div>

  <span className="hidden sm:block">|</span>

  <div>
    Real-World Project Experience
  </div>

</div>

      {/* 🔥 ABOUT */}
      <AboutServiceSection
        tag="About this Service"
        heading="Future-Ready Skill Development"
        description1="Our Training Department delivers structured, industry-aligned programs that bridge the gap between academic learning and real-world IT demands."
        description2="Through hands-on projects, live simulations, and practical problem-solving, we prepare candidates to confidently meet evolving technology and job-market expectations."
        buttonText="Learn More →"
        image={trainingImg}
      />

      {/* 🔥 CORE TRAINING AREAS */}
      <CoretrainingAreas />

      {/* 🔥 TRAINING METHOD */}
      <TrainingMethodTemplate
  tag="Our Training Methodology"
  heading="Our Structured Learning Process"
  description="A step-by-step approach that guides students through personalized skill assessments, hands-on training, real-world experience, and placement readiness."
  steps={steps}
  arrowImg={CurveArrow}
/>

      {/* 🔥 WHY CHOOSE */}
      {/* ================= WHY CHOOSE ================= */}
      <WhyChooseOurAT
        tag="Why Choose Us"
        heading="Why Our Team Stands Apart"
        subheading="Structured, transparent and result-driven approach."
        data={data}
      />
            

      {/* 🔥 TOOLS & TECHNOLOGIES */}
      <ToolsTech />

      {/* 🔥 FAQ */}
      <FAQ
        tag="FAQ"
        heading="Frequently Asked Question"
        description="Find clear answers to common questions about admissions, visa processes, placements, and building your IT career in the USA."
        questions={faqData}
      />

      {/* 🔥 CONTACT */}
      <Contact />

      <Footer />
    </>
  );
};

export default Training;
