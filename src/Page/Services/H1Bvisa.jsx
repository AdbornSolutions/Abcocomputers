import React from 'react'
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import FAQ from '../../Component/Common/FAQ';
import TimelineTemplate from "../../Component/Departments-page/OurOnboarding";
import DepartmentHero from "../../Component/Departments-page/DHeroSec";
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";
import OurTeam from '../../Component/Common/Ourteam';
import WhyChooseOurAT from "../../Component/Departments-page/WhyChooseOurAT";
import Testimonials from '../../Component/Common/Testimonials';

import aboutImg from "../../assets/ServicePage/Aboutthis/4.png";
import onboardingImg from "../../assets/DepartmentPage/Group 4.png"; // tera image
import i1 from "../../assets/DepartmentPage/WHYchooseOAT/1.png";
import i2 from "../../assets/DepartmentPage/WHYchooseOAT/2.png";
import i3 from "../../assets/DepartmentPage/WHYchooseOAT/3.png";
import i4 from "../../assets/DepartmentPage/WHYchooseOAT/4.png";
import i5 from "../../assets/DepartmentPage/WHYchooseOAT/5.png";
import Types from '../../Component/Service-page/types';
import Contact from '../../Component/Common/Contact';


const data1 = [
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

const data = [
  { side: "right", title: "Documentation Review", text: "Thorough verification of required documents to ensure accuracy, completeness, and readiness for the onboarding process." },
  { side: "left", title: "Compliance Verification", text: "Ensuring all legal, regulatory, and organizational compliance requirements are properly met before final confirmation." },
  { side: "right", title: "Contract Finalization", text: "Preparation, review, and confirmation of employment agreements to establish clear terms and expectations." },
  { side: "left", title: "Onboarding Coordination", text: "Facilitating structured communication between candidate and employer to ensure a smooth transition into the role." },
  { side: "right", title: "Employee Record Management", text: "Providing essential guidance on company systems, policies, and operational procedures for confident integration." },
  { side: "left", title: "Continuous HR Support", text: "Ongoing HR assistance and monitoring during the initial employment phase to ensure stability and professional success." },
];

const H1Bvisa = () => {
  return (
   <>
   <Navbar/>

    {/* ================= HERO ================= */}
      <DepartmentHero
        breadcrumb="Service > IT Jobs Placement in USA  "
        heading="Guaranteed IT Job Placement in USA"
        description="Our IT Job Placement service connects talented individuals with top-tier U.S. employers. We provide comprehensive support, from resume building to interview preparation, ensuring that you secure the job you deserve in the fast-paced IT industry."
        primaryBtn="Get Started Now"
        secondaryBtn="Book Free Consultation"
      />

       {/* ================= ABOUT ================= */}
      <AboutServiceSection
        tag="About this Service"
        heading="Understanding the H1B Visa Process"
        description1="The H1B visa allows qualified professionals to live and work in the U.S. temporarily. Our experts guide you through every step of the process, from eligibility checks to final approval, ensuring you’re fully prepared for the journey."
        description2="Key Stages of the H1B Visa Process :"
        description3={[
            "Eligibility Assessment: We assess whether your background and job position meet the H1B visa requirements.",
            "Labor Condition Application (LCA): Your employer files the LCA with the U.S. Department of Labor.",
            "Petition Filing with USCIS: We assist with filing your H1B petition with USCIS for approval.",
            "Visa Interview & Documentation: We prepare you for the interview and help you with the necessary documents.",
            "Visa Approval & Stamping: After approval, you will receive your visa stamp, and you’re ready to enter the U.S.",
        ]}
        buttonText="Learn More →"
        image={aboutImg}
      />
      <TimelineTemplate
        titleSmall="Our"
        titleMain="OnBoarding Process"
        image={onboardingImg}
        timelineItems={data}
      />
      
      <WhyChooseOurAT
        tag="Why Choose Us"
        heading="Why Our Team Stands Apart"
        subheading="Structured, transparent and result-driven approach."
        data={data1}
            />
      <OurTeam />
      <Types />
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
      <Contact />
      
      <Footer />
   </>
  )
}

export default H1Bvisa