import React from 'react'
import Navbar from '../../Component/Navbar'
import DepartmentHero from './Department-hero'
import Overview from '../../Component/Departments-page/Overview'
import Departments from '../../Component/Departments-page/Departments'
import OurStructure from '../../Component/Departments-page/ourStruscture'
import Testimonials from '../../Component/Common/Testimonials'
import Contact from '../../Component/Common/Contact'
import Footer from '../../Component/Footer'
import OurTeam from '../../Component/Common/Ourteam'

const Department = () => {
  return (
    <>
      <Navbar />
      <DepartmentHero />
      <Overview />
      <Departments />
      <OurStructure />
      <OurTeam />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default Department