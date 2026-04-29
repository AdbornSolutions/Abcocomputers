import React from 'react'
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';
import FAQ from '../../Component/Common/FAQ';
import FAQ1 from '../../Component/Common/FAQ1';
import DepartmentHero from "../../Component/Departments-page/DHeroSec";
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";
import OurTeam from '../../Component/Common/Ourteam';
import WhyChooseOurAT from "../../Component/Departments-page/WhyChooseOurAT";
import Testimonials from '../../Component/Common/Testimonials';
import TimelineTemplate from "../../Component/Departments-page/OurOnboarding";

import onboardingImg from "../../assets/DepartmentPage/Group 4.png"; // tera image
import aboutImg from "../../assets/ServicePage/Aboutthis/5.png";

import i1 from "../../assets/DepartmentPage/WHYchooseOAT/1.png";
import i2 from "../../assets/DepartmentPage/WHYchooseOAT/2.png";
import i3 from "../../assets/DepartmentPage/WHYchooseOAT/3.png";
import i4 from "../../assets/DepartmentPage/WHYchooseOAT/4.png";
import i5 from "../../assets/DepartmentPage/WHYchooseOAT/5.png";
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



const F1visa = () => {
  return (
   <>
   <Navbar/>

    {/* ================= HERO ================= */}
      <DepartmentHero
        breadcrumb="Service > F1 Visa in USA  "
        heading="Complete F1 Visa Process Support"
        description="We provide step-by-step guidance for your F1 student visa application, from document preparation to interview training. Our expert support ensures clarity, confidence, and higher chances of visa approval for your U.S. education journey."
        primaryBtn="Start Your Application"
        secondaryBtn="Book Free Consultation"
      />

       {/* ================= ABOUT ================= */}
      <AboutServiceSection
        tag="About this Service"
        heading="Your Trusted F1 Visa Guidance Partner"
        description1="The F1 Visa allows international students to pursue full-time academic programs in the United States. It is a crucial step toward studying at U.S. universities and building a global career."
        description2="Our team provides complete end-to-end guidance throughout the F1 visa process. From SEVIS registration and DS-160 filing to financial documentation and visa interview preparation, we ensure accuracy, clarity, and confidence at every stage.
We understand that the visa process can feel overwhelming. Our structured support system simplifies every step, helping students avoid common mistakes and significantly increase their chances of approval."
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
      <FAQ1
        tag="Interview"
        heading="Prepare for Your Visa Interview"
        description="Be fully prepared with the most commonly asked F1 visa interview questions and expert guidance on how to answer them confidently."
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
      <Contact />
      <Footer />
   </>
  )
}

export default F1visa
