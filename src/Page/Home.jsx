import React from 'react'
import bg from "../assets/home-page/home-bg.png";
import HomeSection from '../Component/Common/HeroSection';
import Footer from '../Component/Footer';
import CareerinUsa from '../Component/Home-page/CareerinUsa';
import Services from '../Component/Common/Services';
import icon1 from "../assets/common-images/icon1.png";
import icon2 from "../assets/common-images/icon1.png";
import icon3 from "../assets/common-images/icon1.png";
import icon4 from "../assets/common-images/icon1.png";
import icon5 from "../assets/common-images/icon1.png";
const Home = () => {
  return (
    <div>
      <HomeSection
        heading="Unlock Your IT Career in the USA with ABCO Computers"
        description="Tap into our network of employers and land positions that match your skills and career goals."
        primaryBtn="Get Started"
        secondaryBtn="Book a call"
        bgImage={bg}
        />
      <CareerinUsa/>
      <Services
  title="Services"
  heading={
    <>
      Our <span className="text-cyan-400">Expertise</span>
    </>
  }
  servicesData={servicesData}
/>
<Footer />
    </div>
  )
}

export default Home
