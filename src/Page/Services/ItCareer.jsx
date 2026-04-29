import React from 'react'
import DepartmentHero from "../../Component/Departments-page/DHeroSec";
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";



import aboutImg from "../../assets/ServicePage/Aboutthis/1.png";
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import OurTeam from '../../Component/Common/Ourteam';
import WhyChoose from '../../Component/Service-page/WhyChoose';
import Testimonials from '../../Component/Common/Testimonials';
import FAQ from '../../Component/Common/FAQ';
import ProcessFlow from '../../Component/Departments-page/ProcessFlow';

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

const ItCareer = () => {
  return (
    <>

    <Navbar/>

    {/* ================= HERO ================= */}
      <DepartmentHero
        breadcrumb="Service > It Career In USA "
        heading="Build Your IT Career in USA"
        description="Comprehensive guidance covering education, visa processing, job placement, and long-term career growth in the United States."
        primaryBtn="Start Your Journey"
        secondaryBtn="Book Free Consultation"
      />

       {/* ================= ABOUT ================= */}
      <AboutServiceSection
        tag="About this Service"
        heading="Your Complete USA Career Pathway"
        description1="At ABCO Computers, we provide comprehensive, end-to-end support 
        for individuals who aspire to build a successful IT career in the United States. 
        Our structured program covers every critical stage —
         from higher education and visa processing to skill development and long-term job placement support."
        description2="We simplify the complex journey of moving to the USA by 
        offering personalized guidance, transparent processes, and continuous mentorship at every step."
        description3={[
            "Fully Funded Master’s Opportunities",
            "Complete F1 & H1B Visa Guidance",
            "Job Marketing & Placement Support",
            "Long-Term Career Growth Strategyh"
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
      <OurTeam />
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

export default ItCareer