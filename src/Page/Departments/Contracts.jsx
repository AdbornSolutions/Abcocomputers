import React from "react";

// 🔥 COMMON
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import Contact from "../../Component/Common/Contact";
import FAQ from "../../Component/Common/FAQ";

// 🔥 DEPARTMENT COMPONENTS
import DepartmentHero from "../../Component/Departments-page/DHeroSec";
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";
import ContractManagement from "../../Component/Departments-page/ContractManagement";
import WhyChooseOurAT from "../../Component/Departments-page/WhyChooseOurAT";
import Toolstech2 from "../../Component/Departments-page/Tools&tech2";
import Counter from "../../Component/Common/Counter";

// 🔥 IMAGE
import contractImg from "../../assets/DepartmentPage/aboutthis3.png"; // apna path check kar


import i1 from "../../assets/DepartmentPage/WHYchooseOAT/1.png";
import i2 from "../../assets/DepartmentPage/WHYchooseOAT/2.png";
import i3 from "../../assets/DepartmentPage/WHYchooseOAT/3.png";
import i4 from "../../assets/DepartmentPage/WHYchooseOAT/4.png";
import i5 from "../../assets/DepartmentPage/WHYchooseOAT/5.png";
import i6 from "../../assets/DepartmentPage/Departmentscard/1.png";



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

const data2 = [
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
  {
    icon: i6,
    title: "Error-Free Documentation",
    desc: "We ensure zero mistakes in documents.",
  },
];

// 🔥 FAQ DATA
const faqData = [
  {
    question: "What types of contracts do you manage?",
    answer: "We handle employment contracts, vendor agreements, service contracts, and legal documentation.",
  },
  {
    question: "How do you ensure compliance?",
    answer: "We follow industry regulations, company policies, and legal frameworks to ensure full compliance.",
  },
  {
    question: "Do you assist with contract negotiation?",
    answer: "Yes, we provide expert negotiation support to ensure fair and beneficial terms.",
  },
  {
    question: "Is document security maintained?",
    answer: "Yes, we use secure systems for document storage, access control, and compliance tracking.",
  },
];

const Contracts = () => {
  return (
    <>
      <Navbar />

      {/* 🔥 HERO */}
      <DepartmentHero
        breadcrumb="Department > Contracts Department"
        heading="Structured Contracts Management & Compliance"
        description="Our Contracts Department ensures clear, compliant, and transparent contract creation, review, and management. We handle employment agreements, service contracts, legal compliance, and documentation accuracy."
        primaryBtn="Learn More"
        secondaryBtn="Get in Touch"
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
        heading="Clear, Secure, and Compliant Contracts"
        description1="The Contracts Department is responsible for managing, reviewing, and finalizing all contract-related matters, ensuring that all parties involved are aligned with legal requirements, compliance standards, and company policies. We manage a wide variety of contracts, including employment agreements, vendor contracts, and legal documentation for both employees and clients"
        description2="We strive for accuracy, efficiency, and legality in every contract, ensuring a transparent, smooth process that mitigates risk and ensures compliance with regulations."
        buttonText="Learn More →"
        image={contractImg}
      />

      {/* 🔥 KEY RESPONSIBILITIES */}
       <WhyChooseOurAT
        tag="Key Responsibilities"
        heading="Key Responsibilities of Our Contracts Team"
        subheading="Ensuring clarity, compliance, and precision at every stage of the contract lifecycle with expert legal guidance and transparent processes."
        data={data2}
      />

      {/* 🔥 CONTRACT FLOW */}
      <ContractManagement />

      {/* 🔥 WHY CHOOSE */}
      <WhyChooseOurAT
        tag="Why Choose Us"
        heading="Why Our Team Stands Apart"
        subheading="Structured, transparent and result-driven approach."
        data={data}
      />

      {/* 🔥 TOOLS */}
      <Toolstech2 />

      {/* 🔥 FAQ */}
      <FAQ
        tag="FAQ"
        heading="Frequently Asked Question"
        description="Find answers to common contract management and compliance-related queries."
        questions={faqData}
      />

      {/* 🔥 CONTACT */}
      <Contact />

      <Footer />
    </>
  );
};

export default Contracts;
