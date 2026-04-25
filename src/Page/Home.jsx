import React from 'react'
import Footer from '../Component/Footer';
import Services from '../Component/Common/Services';
import HomeHeroSection from '../Component/Home-page/HomeHeroSection';
import { servicesData } from '../data/data';
import Navbar from '../Component/Navbar';
import YourGateway from '../Component/Home-page/YourGateway';

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* ✅ HERO + SLIDER + CAREER (ALL IN ONE) */}
      <HomeHeroSection />

      {/* ✅ SERVICES SECTION */}
      <Services
  title="Services"
  heading={
    <>
      Our <span className="text-cyan-400">Expertise</span>
    </>
  }
  servicesData={servicesData}
/>

      <YourGateway />
<Footer />
    </div>
  );
};

export default Home;