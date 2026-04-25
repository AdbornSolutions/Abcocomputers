import React from "react";
import HeroSection from "../Component/Common/HeroSection";
import OurCommitment from "../Component/About-page/OurComittment";
import OurPurpose from "../Component/About-page/OurPurpose";
import ExpertTree from "../Component/About-page/ExpertTree";
import Footer from "../Component/Footer";
import NavBar from "../Component/Navbar";
import ServicesCommon from "../Component/Common/Services-Commen.jsx";
import {servicesData} from "../data/data.js";

import heroBg from "../assets/Aboutpage/choose abco company.png"; // use your bg

const About = () => {
  return (
    <div className="bg-[#060B14] text-white min-h-screen">
      
      <NavBar />

      {/* HERO */}
      <HeroSection
        heading="Welcome to ABCO Computers - IT Services And Solutions"
        description="ABCO Computers is a trusted IT solutions provider empowering individuals and businesses through innovative technology, expert professionals, personalized guidance, and continuous commitment to excellence and industry advancements."
        primaryBtn="Explore Now"
      />

      {/* OurCommitment */}
      <OurCommitment />
      
      {/* OurPurpose */}
      <OurPurpose />

      {/* Why Companese Choose us  */}

      <img src={heroBg} alt="hero-bg" className="w-[80%] h-[100%] mx-auto " />

      {/* ✅ SERVICES SECTION */}
      <ServicesCommon
        title="Services"
        heading={
          <>
            Our <span className="text-cyan-400">Expertise</span>
          </>
        }
        servicesData={servicesData}
      />
      <ExpertTree />

      {/* FOOTER */}
      <Footer />

    </div>
  );
};
export default About;