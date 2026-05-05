import React from "react";

// 🔥 COMMON
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import Contact from "../../Component/Common/Contact";
import FAQ from "../../Component/Common/FAQ";

// 🔥 COMPONENTS
import DepartmentHero from "../../Component/Departments-page/DHeroSec";
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";
import ProcessFlow from "../../Component/Departments-page/ProcessFlow";
import TrainingMethodTemplate from "../../Component/Departments-page/OurTrainingMethod";
import WhyChooseTemplate from "../../Component/Departments-page/WhyChooseOurAT";
import Counter from "../../Component/Common/Counter";


// 🔥 IMAGE
import legalImg from "../../assets/DepartmentPage/aboutthis5.png";
import CurveArrow from "../../assets/DepartmentPage/curved.png";

import i1 from "../../assets/DepartmentPage/WHYchooseOAT/1.png";
import i2 from "../../assets/DepartmentPage/WHYchooseOAT/2.png";
import i3 from "../../assets/DepartmentPage/WHYchooseOAT/3.png";
import i4 from "../../assets/DepartmentPage/WHYchooseOAT/4.png";
import i5 from "../../assets/DepartmentPage/WHYchooseOAT/5.png";
import i6 from "../../assets/DepartmentPage/Departmentscard/1.png";

// 🔥 KEY SERVICES
const servicesSteps = [
  { icon: i1, title: "Visa Processing", desc: "End-to-end visa application handling with documentation support." },
  { icon: i2, title: "Document Verification", desc: "Accurate validation of all submitted documents." },
  { icon: i3, title: "Green Card Assistance", desc: "Complete guidance for permanent residency applications." },
  { icon: i4, title: "Legal Compliance", desc: "Ensuring adherence to immigration laws and policies." },
  { icon: i5, title: "Work Visa Support", desc: "Support for H1-B and work permit processes." },
  { icon: i6, title: "Family Immigration", desc: "Helping families relocate with proper legal assistance." },
];

// 🔥 PROCESS STEPS
const processSteps = [
  { id: "01", title: "Initial Consultation" },
  { id: "02", title: "Document Collection & Verification" },
  { id: "03", title: "Visa Application & Submission" },
  { id: "04", title: "Interview Preparation & Support" },
  { id: "05", title: "Visa Approval & Legal Guidance" },
  { id: "06", title: "Ongoing Support & Compliance" },
];

// 🔥 WHY CHOOSE
const whyData = [
  {
    title: "Clear & Transparent Process",icon: i1,
    desc: "No hidden steps, full clarity at every stage.",
    highlight: true,
  },
  {
    title: "Legal Expertise & Compliance",icon: i2,
    desc: "Deep understanding of immigration laws.",
  },
  {
    title: "Personalized Legal Consultation",icon: i3,
    desc: "Tailored guidance for each client.",
  },
  {
    title: "Fast and Efficient Service",icon: i4,
    desc: "Quick processing with minimal delays.",
  },
  {
    title: "Trusted by Hundreds of Clients",icon: i5,
    desc: "Proven track record of success.",
  },
];

// 🔥 FAQ
const faqData = [
  {
    question: "Do I need prior IT experience?",
    answer: "Not necessary. Immigration services are available for all eligible applicants.",
  },
  {
    question: "How long does visa processing take?",
    answer: "Processing time depends on visa type and documentation accuracy.",
  },
  {
    question: "Do you assist with legal documentation?",
    answer: "Yes, we provide complete documentation and compliance support.",
  },
  {
    question: "Is interview preparation included?",
    answer: "Yes, we guide you through interview preparation and mock sessions.",
  },
];

const ImmigrationsAndLegal = () => {
  return (
    <>
      <Navbar />

      {/* 🔥 HERO */}
      <DepartmentHero
        breadcrumb="Department > Immigration & Legal Department"
        heading="Comprehensive Immigration & Legal Services"
        description="We provide expert guidance on visa applications, documentation, compliance, and legal processes to help individuals navigate U.S. immigration smoothly."
        primaryBtn="Get Legal Assistance"
        secondaryBtn="Book Your Consultation"
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
        heading="Expert Immigration and Legal Guidance"
        description1="We assist with visa applications, green cards, and legal documentation through a structured and transparent process."
        description2="Our team ensures that every requirement is met with accuracy, minimizing risks and delays."
        buttonText="Learn More →"
        image={legalImg}
      />

      {/* 🔥 SERVICES */}
      <WhyChooseTemplate
        tag="Key Services"
        heading="Our Immigration Services"
        subheading="We offer a comprehensive range of immigration and legal services, ensuring that your visa, compliance, and immigration processes are handled efficiently, accurately, and legally."
        data={servicesSteps}
      />

      {/* 🔥 PROCESS */}
      <TrainingMethodTemplate
        tag="Legal Process"
        heading="Our Step-by-Step Immigration Process"
        description="A structured approach from consultation to visa approval and compliance."
        steps={processSteps}
        arrowImg={CurveArrow}
      />

      {/* 🔥 WHY CHOOSE */}
      <WhyChooseTemplate
        tag="Why To Choose Us"
        heading="Why Trust Our Immigration Expertise"
        subheading="We simplify the immigration process with transparency, compliance, and efficiency."
        data={whyData}
      />

      {/* 🔥 FAQ */}
      <FAQ
        tag="FAQ"
        heading="Frequently Asked Question"
        description="Find answers to common immigration and legal queries."
        questions={faqData}
      />

      {/* 🔥 CONTACT */}
      <Contact />

      <Footer />
    </>
  );
};

export default ImmigrationsAndLegal;
