import React from "react";

// 🔥 HERO
import DepartmentHero from "../../Component/Departments-page/DHeroSec";

// 🔥 ABOUT SECTION
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";

// 🔥 PROCESS FLOW
import ProcessFlow from "../../Component/Departments-page/ProcessFlow";

// 🔥 TIMELINE
import TimelineTemplate from "../../Component/Departments-page/Arrowtemplate";

// 🔥 WHY CHOOSE
import WhyChooseOurAT from "../../Component/Departments-page/WhyChooseOurAT";

import DocumentsRFA from "../../Component/Departments-page/DocumentsRFA";

import Navbar from "../../Component/Navbar";

// 🔥 FAQ
import FAQ from "../../Component/Common/FAQ";

// 🔥 FOOTER
import Footer from "../../Component/Footer";

import Contact from "../../Component/Common/Contact";

// 🔥 IMAGE (About Section)
import aboutImg from "../../assets/DepartmentPage/Group 5.png";

// 🔥 TIMELINE IMAGE
import timelineImg from "../../assets/DepartmentPage/Arrowtemp.png";

const Admission = () => {
  return (
    <>
    <Navbar />

      {/* ================= HERO ================= */}
      <DepartmentHero
        breadcrumb="Department > Admission Department"
        heading="University Admissions Made Strategic"
        description="Our Admission Department provides structured guidance for selecting the right universities, preparing strong applications, and securing admissions into accredited U.S. master's programs with clarity, transparency, and professional expertise."
        primaryBtn="Start Admission Process"
        secondaryBtn="Book Free Consultation"
      />

      {/* ================= ABOUT ================= */}
      <AboutServiceSection
        tag="About this Service"
        heading="Driving Structured Admission Success"
        description1="We help students identify the best-fit universities based on their academic profile, career goals, and financial considerations. Our expert team ensures every step is strategically planned."
        description2="From profile evaluation to final admission confirmation, we simplify complex processes and provide end-to-end support to maximize your chances of success."
        buttonText="Learn More →"
        image={aboutImg}
      />

      {/* ================= PROCESS ================= */}
      <ProcessFlow
        tag="Process"
        heading="Structured Pathway to Admission Success"
        subheading="Our systematic approach ensures clarity, transparency, and expert guidance at every stage of your admission journey."
        steps={[
          {
            id: "01",
            title: "University Shortlisting",
            desc: "We carefully evaluate academic background, career objectives, and university criteria to create a strategic shortlist aligned with your long-term professional goals.",
          },
          {
            id: "02",
            title: "Application Documentation",
            desc: "Complete preparation and verification of transcripts, certificates, recommendation letters, and required documentation to ensure accuracy and compliance.",
          },
          {
            id: "03",
            title: "SOP & Resume Assistance",
            desc: "Expert guidance in crafting compelling Statements of Purpose and professionally structured academic resumes tailored to university expectations.",
          },
          {
            id: "04",
            title: "Application Submission",
            desc: "Accurate and timely submission of applications with proper coordination to avoid delays and maximize admission success rates.",
          },
          {
            id: "05",
            title: "Admission Tracking",
            desc: "Continuous monitoring of application progress and proactive communication with universities to ensure smooth processing.",
          },
          {
            id: "06",
            title: "Offer Letter Assistance",
            desc: "Professional review and advisory support for evaluating and confirming university admission offers.",
          },
        ]}
      />

      {/* ================= TIMELINE ================= */}
      <TimelineTemplate
        titleSmall="Our"
        titleMain="Structured Admission Roadmap"
        image={timelineImg}
        timelineItems={[
          {
            title: "Profile Evaluation",
            text: "We analyze your academic background, technical strengths, and career objectives to design a customized admission strategy.",
          },
          {
            title: "University Shortlisting",
            text: "Strategic selection of universities aligned with eligibility criteria, budget considerations, and long-term career aspirations.",
          },
          {
            title: "Documentation Preparation",
            text: "Complete preparation and verification of transcripts, recommendation letters, financial records, and supporting documentation.",
          },
          {
            title: "SOP & Resume Finalization",
            text: "Development of compelling Statements of Purpose and professionally structured academic resumes tailored to university standards.",
          },
          {
            title: "Application Submission",
            text: "Accurate and timely submission of applications with careful review to prevent errors and delays.",
          },
           {
            title: "Offer Letter Confirmation",
            text: "Guidance in reviewing admission offers, evaluating options, and confirming enrollment decisions.",
          },
        ]}
      />

      {/* ================= WHY CHOOSE ================= */}
      <WhyChooseOurAT />

      <DocumentsRFA />

      {/* ================= FAQ ================= */}
      <FAQ
  tag="FAQ"
  heading="Frequently Asked Questions"
  description="Find clear answers to common questions."
  questions={[
    {
      question: "What documents are required?",
      answer: "We guide you through SOP, resume, transcripts and more.",
    },
    {
      question: "How long does process take?",
      answer: "Typically 2–4 months depending on intake.",
    },
    {
      question: "Do you assist with SOP?",
      answer: "Yes, we provide expert SOP writing support.",
    },
  ]}
/>

      <Contact />

      <Footer />

    </>
  );
};

export default Admission;