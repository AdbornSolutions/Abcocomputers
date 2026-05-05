import React from "react";
import Navbar from "../../Component/Navbar";
import DepartmentHero from "../../Component/Departments-page/DHeroSec";
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";
import aboutservice1 from "../../assets/DepartmentPage/aboutservice1.png";
import ProcessFlow from "../../Component/Departments-page/ProcessFlow";
import onboardingImg from "../../assets/DepartmentPage/Group 4.png"; // tera image
import TimelineTemplate from "../../Component/Departments-page/OurOnboarding";
import heroBg from "../../assets/DepartmentPage/HR Policies.png";
import Ourteam from "../../Component/Common/Ourteam";
import FAQ from "../../Component/Common/FAQ";
import Contact from "../../Component/Common/Contact";
import Footer from "../../Component/Footer";


const stepsData = [
  {
    id: "01",
    title: "Recruitment Coordination",
    desc: "We align departments, employers, and candidates through careful evaluation and clear communication."
  },
  {
    id: "02",
    title: "Documentation & Compliance",
    desc: "We verify employment documents and contracts ensuring compliance throughout the hiring process."
  },
  {
    id: "03",
    title: "Offer Letter & Agreements",
    desc: "We prepare employment contracts and onboarding documents ensuring clarity and transparency."
  },
  {
    id: "04",
    title: "Onboarding Process Management",
    desc: "We ensure smooth onboarding through structured orientation and guidance."
  },
  {
    id: "05",
    title: "Employee Record Management",
    desc: "We securely manage employee records and ensure compliance and documentation."
  },
  {
    id: "06",
    title: "Continuous HR Support",
    desc: "We provide ongoing HR support beyond onboarding for long-term success."
  },
];

const data = [
  { side: "right", title: "Documentation Review", text: "Thorough verification of required documents to ensure accuracy, completeness, and readiness for the onboarding process." },
  { side: "left", title: "Compliance Verification", text: "Ensuring all legal, regulatory, and organizational compliance requirements are properly met before final confirmation." },
  { side: "right", title: "Contract Finalization", text: "Preparation, review, and confirmation of employment agreements to establish clear terms and expectations." },
  { side: "left", title: "Onboarding Coordination", text: "Facilitating structured communication between candidate and employer to ensure a smooth transition into the role." },
  { side: "right", title: "Employee Record Management", text: "Providing essential guidance on company systems, policies, and operational procedures for confident integration." },
  { side: "left", title: "Continuous HR Support", text: "Ongoing HR assistance and monitoring during the initial employment phase to ensure stability and professional success." },
];

const HrOnboarding = () => {
  return (
    <div className="bg-[#060B14] text-white">
      
      <Navbar />
      {/* HERO SECTION */}
       <DepartmentHero
        breadcrumb="Department • HR & Onboarding Department"
        heading="Human Resources & Onboarding Excellence"
        description="Our HR & Onboarding Department ensures seamless recruitment coordination, compliance verification, and smooth employee integration. We focus on structured hiring processes, documentation accuracy, and efficient onboarding to create a strong foundation for long-term professional success."
        primaryBtn="Start Your Journey"
        secondaryBtn="Book Free Consultation"
      />

      <AboutServiceSection
        tag="About Us"
        heading="Empowering Your Success with Our Dedicated Team"
        description1="At our core, we believe in empowering individuals and organizations to reach their full potential. Our team of experienced professionals is here to provide you with the support and resources you need to succeed."
        description2="Whether you're looking to grow your business, improve your processes, or simply stay ahead of the competition, we've got you covered. Let's work together to create something amazing."
        buttonText="Learn More"
        image={aboutservice1}
        reverse={true}
      />

      <ProcessFlow
  tag="Process"
  heading="Structured Pathway to USA Success"
  subheading="Our systematic approach ensures clarity, transparency, and expert guidance at every stage."
  steps={stepsData}
/>

<TimelineTemplate
  titleSmall="Our"
  titleMain="OnBoarding Process"
  image={onboardingImg}
  timelineItems={data}
/>

      {/* Why Companese Choose us  */}
      <div className="w-full bg-[#060B14] text-white py-20 px-4 md:px-8 lg:px-16">
        <h2 className="text-[28px] md:text-[34px] lg:text-[42px] font-medium leading-tight text-center">
          Why Our HR Team Stands Apart
        </h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-center mt-4">
          Delivering structured processes, compliance precision, and seamless onboarding <br /> experiences with dedicated professional support.
        </p>
        <img src={heroBg} alt="hero-bg" className="w-full max-w-[965px] h-auto mx-auto mt-12" />
      </div>
      
      <Ourteam />
      <FAQ
  tag="FAQ"
  heading="Frequently Asked Question"
  description="Find clear answers to common questions about admissions, visa processes, placements, and building your IT career in the USA."
  questions={[
    {
      question: "What documents are required for onboarding?",
      answer: "You need ID proof, educational documents, offer letter, and compliance forms.",
    },
    {
      question: "How long does onboarding take?",
      answer: "Usually 7–15 days depending on documentation and approvals.",
    },
    {
      question: "Do you assist with compliance documentation?",
      answer: "Yes, we provide full support for legal and compliance processes.",
    },
    {
      question: "What happens after joining?",
      answer: "You will receive training, project allocation, and continuous support.",
    },
  ]}
/>

      <Contact />
      <Footer />


    </div>
  );
};

export default HrOnboarding;
