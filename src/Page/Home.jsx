import React from 'react'
import bg from "./../assets/home-page/home-bg.png";
import HomeSection from '../Component/Common/HeroSection';
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
    </div>
  )
}

export default Home
