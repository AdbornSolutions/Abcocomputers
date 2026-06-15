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
        description="Build your global career with expert admission guidance, exam preparation, visa support, and career-focused learning designed for your future success."
        primaryBtn="Start Your Journey"
        secondaryBtn="Book Free Consultation"
        showGridPattern
        showParticles={false}
     
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
