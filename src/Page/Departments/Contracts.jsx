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

// 🔥 IMAGE
import contractImg from "../../assets/DepartmentPage/aboutthis3.png"; // apna path check kar
import Keyresponsibility from "../../Component/Departments-page/Keyresponsiblity";




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

      {/* 🔥 ABOUT */}
      <AboutServiceSection
        tag="About this Service"
        heading="Clear, Secure, and Compliant Contracts"
        description1="We manage, review, and finalize all contract-related matters ensuring compliance standards and transparency."
        description2="From employment agreements to vendor contracts, we maintain accuracy and structured processes to minimize risks."
        buttonText="Learn More →"
        image={contractImg}
      />

      {/* 🔥 KEY RESPONSIBILITIES */}
      <Keyresponsibility />

      {/* 🔥 CONTRACT FLOW */}
      <ContractManagement />

      {/* 🔥 WHY CHOOSE */}
      <WhyChooseOurAT />

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