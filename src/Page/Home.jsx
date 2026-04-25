import React from 'react'
import Footer from '../Component/Footer';
import Services from '../Component/Common/Services';
import HomeHeroSection from '../Component/Home-page/HomeHeroSection';
import OurTeam from "../Component/Home-page/OurTeam";
import { servicesData } from '../data/data';

const Home = () => {
  return (
    <div>

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

<OurTeam />
<Footer />
    </div>
  );
};

export default Home;