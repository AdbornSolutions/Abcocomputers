import React from 'react'
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import FAQ1 from '../../Component/Common/FAQ1';
import FAQ from '../../Component/Common/FAQ';
import ProcessFlow from '../../Component/Service-page/Process';
import DepartmentHero from "../../Component/Departments-page/DHeroSec";
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";
import OurTeam from '../../Component/Common/Ourteam';
import WhyChoose from '../../Component/Service-page/Whychoose4';
import WhyChoose1 from '../../Component/Service-page/Whychoose5';
import Testimonials from '../../Component/Common/Testimonials';


import aboutImg from "../../assets/ServicePage/Aboutthis/1.png";
import Contact from '../../Component/Common/Contact';


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
 


const GreenCard = () => {
  return (
   <>
   <Navbar/>

    {/* ================= HERO ================= */}
      <DepartmentHero
        breadcrumb="Service > Green Card in USA  "
        heading="Green Card in USA"
        description="Our IT Job Placement service connects talented individuals with top-tier U.S. employers. We provide comprehensive support, from resume building to interview preparation, ensuring that you secure the job you deserve in the fast-paced IT industry."
        primaryBtn="Get Started Now"
        secondaryBtn="Book Free Consultation"
      />

       {/* ================= ABOUT ================= */}
      <AboutServiceSection
        tag="About this Service"
        heading="Your Pathway to IT Career Success in the USA"
        description1="Our IT Job Placement team specializes in helping talented professionals find rewarding opportunities in the U.S. IT job market. With years of experience and a large network of top employers, we help you with every aspect of the job search."
        
        description3={[
            "Resume Optimization: We ensure your resume is polished, optimized, and aligned with industry standards.",
            "Interview Preparation: We provide mock interviews, help you craft impactful answers, and boost your confidence.",
            "Job Search Strategy: Tailored guidance on where to look, how to apply, and which companies align with your career goals.",
            "Employer Connections: We connect you with top employers who are actively looking for professionals with your skill set.",
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
      <FAQ1
        tag="Eligibility "
        heading="Who is Eligible for a Green Card?"
        description="Discover if you're eligible for a Green Card through family ties, employment, investment, or other specific categories. We provide tailored guidance to help you assess your eligibility and start the process."
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
      <WhyChoose1 />
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
  )
}

export default GreenCard