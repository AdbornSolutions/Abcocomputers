import React from "react";

// 🔥 COMMON
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import Contact from "../../Component/Common/Contact";
import FAQ from "../../Component/Common/FAQ";

// 🔥 COMPONENTS
import DepartmentHero from "../../Component/Departments-page/DHeroSec";
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";
import TrainingMethodTemplate from "../../Component/Departments-page/OurTrainingMethod";
import WhyChooseTemplate from "../../Component/Departments-page/WhyChooseOurAT";
import ToolsTech from "../../Component/Departments-page/Tools&Tech";
import Counter from "../../Component/Common/Counter";

// 🔥 IMAGE
import marketingImg from "../../assets/DepartmentPage/aboutthis4.png";
import CurveArrow from "../../assets/DepartmentPage/curved.png";

import i1 from "../../assets/DepartmentPage/WHYchooseOAT/1.png";
import i2 from "../../assets/DepartmentPage/WHYchooseOAT/2.png";
import i3 from "../../assets/DepartmentPage/WHYchooseOAT/3.png";
import i4 from "../../assets/DepartmentPage/WHYchooseOAT/4.png";
import i5 from "../../assets/DepartmentPage/WHYchooseOAT/5.png";
import i6 from "../../assets/DepartmentPage/Departmentscard/1.png";

// 🔥 STEPS (PROCESS FLOW)
const processSteps = [
  { icon: i1, title: "Digital Marketing", desc: "SEO, SEM, and paid ads strategies to drive traffic." , highlight: true,},
  { icon: i2, title: "Brand Strategy", desc: "Building strong brand identity and positioning." },
  { icon: i3, title: "Analytics & Reporting", desc: "Data-driven insights for performance tracking." },
  { icon: i4, title: "Social Media Marketing", desc: "Engaging audience through social platforms." },
  { icon: i5, title: "Email Marketing", desc: "Targeted campaigns to boost conversions." },
  { icon: i6, title: "Creative Design & Content", desc: "Visual storytelling and creative campaigns." },
];

// 🔥 TRAINING METHOD STYLE (Marketing Process)
const marketingSteps = [
  { id: "01", title: "Market Research" },
  { id: "02", title: "Strategy Development" },
  { id: "03", title: "Campaign Creation" },
  { id: "04", title: "Implementation & Execution" },
  { id: "05", title: "Analytics & Optimization" },
  { id: "06", title: "Reporting & Refinement" },
];

// 🔥 WHY CHOOSE DATA
const whyData = [
  {
    title: "Data-Driven Campaigns",
    desc: "Optimized strategies using real-time analytics.",
    highlight: true,
    icon: i1,
  },
  {
    title: "Comprehensive Digital Strategy",
    desc: "End-to-end marketing solutions for growth.",icon: i2,
  },
  {
    title: "Innovative Brand Development",
    desc: "Creative approaches for brand visibility.",icon: i3,
  },
  {
    title: "High ROI Marketing Focus",icon: i4,
    desc: "Maximizing returns through targeted campaigns.",
  },
  {
    title: "Expertise in Lead Generation",
    desc: "Driving quality leads with proven strategies.",icon: i5,
  },
];

// 🔥 FAQ DATA
const faqData = [
  {
    question: "What marketing services do you provide?",
    answer: "We provide SEO, social media marketing, paid ads, branding, and content strategies.",
  },
  {
    question: "Do you handle social media management?",
    answer: "Yes, we manage content, campaigns, and engagement across platforms.",
  },
  {
    question: "How do you measure campaign success?",
    answer: "Through analytics, conversion tracking, and ROI metrics.",
  },
  {
    question: "Do you offer customized strategies?",
    answer: "Absolutely, all campaigns are tailored to your business goals.",
  },
];

const Marketing = () => {
  return (
    <>
      <Navbar />

      {/* 🔥 HERO */}
      <DepartmentHero
        breadcrumb="Department > Marketing Department"
        heading="Driving Strategic Marketing Growth"
        description="Our Marketing Department uses data-driven strategies, creative campaigns, and market research to build brand visibility, engage audiences, and drive business success."
        primaryBtn="Explore Marketing Services"
        secondaryBtn="Book a Free Consultation"
      />
        {/* ===== STATS ===== */}
         <div
    className="bg-[#060B14]  flex flex-wrap justify-center items-center gap-4 text-[24px] md:text-[24px] text-gray-300"
    style={{
      fontFamily: "Merienda One",
      fontWeight: 400,
      fontSize: "24px",
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
        heading="Innovative Marketing Solutions for Growth"
        description1="We deliver result-driven strategies that enhance brand awareness, generate high-quality leads, and drive engagement."
        description2="By combining digital marketing tactics, content strategy, SEO, and social media engagement, we ensure sustainable growth."
        buttonText="Learn More →"
        image={marketingImg}
      />

      {/* 🔥 PROCESS FLOW (KEY RESPONSIBILITIES) */}
      <WhyChooseTemplate
        tag="KEY RESPONSIBILITIES"
        heading="Our Marketing Department’s Key Responsibilities"
        subheading="Our department specializes in data-driven strategies, creative campaigns, and results-focused initiatives. We handle everything from SEO and brand building to content creation and analytics, driving business growth through impactful marketing efforts."
        data={processSteps}
      />

      {/* 🔥 MARKETING PROCESS (LIKE TRAINING METHOD) */}
      <TrainingMethodTemplate
        tag="Marketing Process"
        heading="Our Strategic Marketing Process"
        description="Our proven step-by-step process ensures measurable and impactful marketing campaigns."
        steps={marketingSteps}
        arrowImg={CurveArrow}
      />

      {/* 🔥 WHY CHOOSE */}
      <WhyChooseTemplate
        tag="Why Choose Us"
        heading="Why Partner with Our Marketing Team"
        subheading="Our results-driven approach ensures your brand stands out and drives real business value."
        data={whyData}
      />

      {/* 🔥 TOOLS */}
      <ToolsTech />

      {/* 🔥 FAQ */}
      <FAQ
        tag="FAQ"
        heading="Frequently Asked Question"
        description="Find answers to common marketing-related queries."
        questions={faqData}
      />

      {/* 🔥 CONTACT */}
      <Contact />

      <Footer />
    </>
  );
};

export default Marketing;