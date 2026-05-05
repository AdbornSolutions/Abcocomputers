import React from "react";

// 🔥 COMMON
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import Contact from "../../Component/Common/Contact";
import FAQ from "../../Component/Common/FAQ";

// 🔥 COMPONENTS
import DepartmentHero from "../../Component/Departments-page/DHeroSec";
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";
import WhyChooseTemplate from "../../Component/Departments-page/WhyChooseOurAT";
import TimelineTemplate from "../../Component/Departments-page/OurOnboarding";

// 🔥 IMAGE
import advisoryImg from "../../assets/DepartmentPage/aboutthis6.png";
import serviceImg2 from "../../assets/DepartmentPage/accout-timeline.png";
import OurTeam from "../../Component/Common/Ourteam";
import Testimonials from "../../Component/Common/Testimonials";
import heroBg from "../../assets/DepartmentPage/why to choose us.png";
// 🔥 SERVICES (Advisory)
const advisorySteps = [
  { id: "01", title: "Business Consultation", desc: "Understanding client goals and challenges for strategic planning." },
  { id: "02", title: "Market Analysis", desc: "In-depth research to identify opportunities and risks." },
  { id: "03", title: "Strategic Planning", desc: "Developing customized strategies for growth and success." },
  { id: "04", title: "Execution Guidance", desc: "Helping implement strategies effectively." },
  { id: "05", title: "Performance Monitoring", desc: "Tracking outcomes and optimizing processes." },
  { id: "06", title: "Continuous Improvement", desc: "Refining strategies for long-term success." },
];

// 🔥 PROCESS STEPS
// 🔥 WHY CHOOSE
const whyData = [
  {
    title: "Expert Advisory Team",
    desc: "Highly experienced professionals with industry expertise.",
    highlight: true,
  },
  {
    title: "Data-Driven Insights",
    desc: "Decisions backed by real market data and analysis.",
  },
  {
    title: "Customized Strategies",
    desc: "Tailored solutions for unique business needs.",
  },
  {
    title: "End-to-End Support",
    desc: "From planning to execution and beyond.",
  },
  {
    title: "Proven Results",
    desc: "Track record of successful business transformations.",
  },
];

// 🔥 FAQ
const faqData = [
  {
    question: "What industries do you provide advisory for?",
    answer: "We provide advisory across IT, business, education, and startup sectors.",
  },
  {
    question: "Do you offer personalized strategies?",
    answer: "Yes, every strategy is customized based on client goals and market analysis.",
  },
  {
    question: "How long does advisory take?",
    answer: "It depends on project scope, but we ensure timely and efficient delivery.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer continuous support and optimization after implementation.",
  },
];

const AdvisoryTeam = () => {
  return (
    <>
      <Navbar />

      {/* 🔥 HERO */}
      <DepartmentHero
        breadcrumb="Department > Advisory Team"
        heading="Strategic Advisory for Business Growth"
        description="Our Advisory Team provides expert guidance, strategic insights, and data-driven solutions to help businesses grow, scale, and succeed in competitive markets."
        primaryBtn="Get Consultation"
        secondaryBtn="Talk to Expert"
      />

      {/* 🔥 ABOUT */}
      <AboutServiceSection
        tag="About this Service"
        heading="Guiding You to Long-Term Success"
        description1="Our Advisory Department specializes in providing strategic insights and customized advice for individuals and businesses."
        description2="Key Points :"
         description3={[
    "Strategic insights: Shows your team's analytical approach, building authority.",
    "Customized advice: Emphasizes that you offer personalized, not generic solutions.",
    "Career, business, and team performance optimization.",
    "Tools and support needed for long-term success."
  ]}
        buttonText="Learn More →"
        image={advisoryImg}
      />

      {/* 🔥 SERVICES */}
      <WhyChooseTemplate
        tag="Why Choose Us"
        heading="Why Our Advisory Team Stands Out"
        subheading="We combine expertise, strategy, and execution to deliver real results."
        data={advisorySteps}
      />

      {/* 🔥 PROCESS */}
      <TimelineTemplate
        titleSmall="Our"
        titleMain={"Structured Financial Process"}
        image={serviceImg2}
        timelineItems={[
          { side: "right", title: "Documentation Review", text: "Thorough verification of required documents to ensure accuracy, completeness, and readiness for the onboarding process." },
  { side: "left", title: "Compliance Verification", text: "Ensuring all legal, regulatory, and organizational compliance requirements are properly met before final confirmation." },
  { side: "right", title: "Contract Finalization", text: "Preparation, review, and confirmation of employment agreements to establish clear terms and expectations." },
  { side: "left", title: "Onboarding Coordination", text: "Facilitating structured communication between candidate and employer to ensure a smooth transition into the role." },
  { side: "right", title: "Employee Record Management", text: "Providing essential guidance on company systems, policies, and operational procedures for confident integration." },
  { side: "left", title: "Continuous HR Support", text: "Ongoing HR assistance and monitoring during the initial employment phase to ensure stability and professional success." },
]}
      />

      {/* 🔥 WHY CHOOSE */}
      <WhyChooseTemplate
        tag="Why Choose Us"
        heading="Why Our Advisory Team Stands Out"
        subheading="We combine expertise, strategy, and execution to deliver real results."
        data={whyData}
      />
      <div className="w-full bg-[#060B14] text-white py-20 px-4 md:px-8 lg:px-16 text-center">

  {/* TAG */}
  <div className="flex justify-center mb-6">
    <span className="px-5 py-1 rounded-full 
    bg-white/10 backdrop-blur-md border border-white/20 
    text-gray-300 text-sm">
      Why Choose Us
    </span>
  </div>

  {/* HEADING */}
  <h2 className="text-[26px] sm:text-[30px] md:text-[38px] lg:text-[44px] 
  font-semibold leading-tight max-w-3xl mx-auto">
    Why Our Advisory Team Makes a Difference
  </h2>

  {/* IMAGE */}
  <div className="mt-14 flex justify-center">
    <img
      src={heroBg}
      alt="hero-bg"
      className="w-full max-w-[1200px] h-auto object-contain 
      rounded-[20px] opacity-90"
    />
  </div>

</div>

      <OurTeam />
      <Testimonials />

      {/* 🔥 FAQ */}
      <FAQ
        tag="FAQ"
        heading="Frequently Asked Question"
        description="Find answers to common advisory-related questions."
        questions={faqData}
      />

      {/* 🔥 CONTACT */}
      <Contact />

      <Footer />
    </>
  );
};

export default AdvisoryTeam;
