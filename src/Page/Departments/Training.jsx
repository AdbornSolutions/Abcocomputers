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
import OurTrainingMethod from "../../Component/Departments-page/OurTrainingMethod";
import WhyChooseOurAT from "../../Component/Departments-page/WhyChooseOurAT";

// 🔥 IMAGE
import trainingImg from "../../assets/DepartmentPage/AboutthisServices.png"; // apna image path dal
import ToolsTech from "../../Component/Departments-page/Tools&Tech";

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
      <OurTrainingMethod />

      {/* 🔥 WHY CHOOSE */}
      <WhyChooseOurAT />

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