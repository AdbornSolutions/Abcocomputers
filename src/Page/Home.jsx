import React from "react";

// ✅ NEW COMBINED SECTION
import HomeHeroSection from "../Component/Home-page/HomeHeroSection";

import Footer from "../Component/Footer";
import Services from "../Component/Common/Services";

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

      {/* ✅ FOOTER */}
      <Footer />

    </div>
  );
};

export default Home;