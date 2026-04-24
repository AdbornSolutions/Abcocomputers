import React from 'react'
import bg from "./../assets/home-page/home-bg.png";
import HomeSection from '../Component/Common/HeroSection';
import Footer from '../Component/Footer';
const Home = () => {
  return (
    <div>
      <HomeSection
        heading="Unlock Your IT Career in the USA with ABCO Computers"
        description="Tap into our network of employers..."
        primaryBtn="Get Started"
        secondaryBtn="Book a call"
        bgImage={bg}
      />
<Footer />
    </div>
  )
}

export default Home
