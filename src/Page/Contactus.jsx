import React from 'react'
import Navbar from '../Component/Navbar'; 
import Footer from '../Component/Footer';
import ContactHero from "../Component/ContactHero";



const Contactus = () => {
  return (
    <>
  
    <Navbar/>
    <ContactHero />
    <div className="w-full px-6 md:px-12 py-12 bg-[#020617]">

  <div className="max-w-6xl mx-auto">

    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
      
      <iframe
        src="https://www.google.com/maps?q=ABCO+Computers+Nagpur&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

    </div>

  </div>

</div>
    <Footer/>
    </>
  )
}

export default Contactus