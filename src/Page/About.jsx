import React from "react";
import HeroSection from "../Component/Common/HeroSection";
import OurCommitment from "../Component/About-page/OurComittment";
import OurPurpose from "../Component/About-page/OurPurpose";
import ExpertTree from "../Component/About-page/ExpertTree";
import Footer from "../Component/Footer";
import NavBar from "../Component/Navbar";

import heroBg from "../assets/home-page/home-bg.png"; // use your bg

const About = () => {
  return (
    <div className="bg-[#060B14] text-white min-h-screen">
      
      <NavBar />

      {/* HERO */}
      <HeroSection
        heading="Welcome to ABCO Computers – IT Services And Solutions"
        description="ABCO Computers is a trusted IT solutions provider empowering individuals and businesses through innovative technology, expert professionals, personalized guidance, and continuous commitment to excellence."
        primaryBtn="Explore Now"
      />

      {/* SECTIONS */}
      <OurCommitment />
      <OurPurpose />
      <ExpertTree />

      {/* FOOTER */}
      <Footer />

    </div>
  );
};
export default About;