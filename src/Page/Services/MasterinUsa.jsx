import React from 'react'
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import FAQ from '../../Component/Common/FAQ';
import ProcessFlow from '../../Component/Departments-page/ProcessFlow';
import DepartmentHero from "../../Component/Departments-page/DHeroSec";
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";
import WhyChooseOurAT from "../../Component/Departments-page/WhyChooseOurAT";
import WhyChoose from '../../Component/Service-page/Whtchoose3';
import Testimonials from '../../Component/Common/Testimonials';


import aboutImg from "../../assets/ServicePage/Aboutthis/3.png";
import i1 from "../../assets/DepartmentPage/WHYchooseOAT/1.png";
import i2 from "../../assets/DepartmentPage/WHYchooseOAT/2.png";
import i3 from "../../assets/DepartmentPage/WHYchooseOAT/3.png";
import i4 from "../../assets/DepartmentPage/WHYchooseOAT/4.png";
import i5 from "../../assets/DepartmentPage/WHYchooseOAT/5.png";

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
 


const MasterinUsa = () => {
  return (
   <>
   <Navbar/>

    {/* ================= HERO ================= */}  
      <DepartmentHero
        breadcrumb="Service > Masters in USA  "
        heading="Your Pathway to Masters in USA"
        description="Pursue your master's degree at top universities in the USA. Our expert guidance helps you navigate the application process, secure funding, and ensure visa success, preparing you for an enriching academic experience."
        primaryBtn="Start Your Application"
        secondaryBtn="Book Free Consultation"
      />

       {/* ================= ABOUT ================= */}
      <AboutServiceSection
        tag="About this Service"
        heading="Why Choose Masters in the USA?"
        description1="Studying in the USA offers world-class education, hands-on experience, and the opportunity to connect with global experts. We provide comprehensive support to ensure your smooth transition to top U.S. universities."
        description2="Key Benefits :"
        description3={[
            "Top-tier Universities: Study at world-renowned institutions with a global reputation for excellence.",
            "Global Networking: Build valuable connections with industry leaders and academic professionals.",
            "Research and Innovation: Gain exposure to groundbreaking research, contributing to your personal and academic growth.",
            "Career Opportunities: Tap into a thriving job market with access to internships and full-time employment in the USA.",
        ]}
        buttonText="Learn More →"
        image={aboutImg}
      />
      <ProcessFlow
        tag="Process"
        heading="Structured Pathway to USA Success"
        subheading="Our systematic approach ensures clarity, transparency, and expert guidance at every stage."
        steps={stepsData}
      />
      <WhyChoose />
      {/* ================= WHY CHOOSE ================= */}
      <WhyChooseOurAT
        tag="Why Choose Us"
        heading="Why Our Team Stands Apart"
        subheading="Structured, transparent and result-driven approach."
        data={data}
      />
      <Testimonials />
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
      <Footer />
   </>
  )
}

export default MasterinUsa;
