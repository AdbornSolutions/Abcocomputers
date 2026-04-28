import React from 'react'
import HeroSection from "../Component/Common/HeroSection";
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Expertise from '../Component/Learning-page/Expertice';
import Roadmap from '../Component/Learning-page/Roadmap';
import InternationalExam from '../Component/Learning-page/InternationalExam';
import WhatmakesUsDiff from '../Component/Learning-page/WhatmakeUsDiff';
const Learning = () => {
  return (
    <>
      <Navbar />
      {/* HERO */}
     

      <HeroSection
        heading={
          <>
            Welcome to Learning at <br />
            <span className="text-cyan-400">ABCO Computers</span>
          </>
        }
        description="Education is the foundation of your global success. Start your journey
         with expert guidance, high-tech training, and a future-ready
          curriculum."
        primaryBtn="Start Your Journey"
        secondaryBtn="Book Free Consultation"
     
      />
     <Expertise/>

     <Roadmap/>
     <InternationalExam/>
     <WhatmakesUsDiff/>

      
      <Footer />
    </>
  )
}

export default Learning