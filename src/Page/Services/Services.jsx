import React from 'react'
import ServiceHero from '../../Component/Service-page/ServiceHero'
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import CareerSection from '../../Component/Service-page/CareerSection'
import SubHerosec from '../../Component/Service-page/SubHerosec'
import OurTeam from '../../Component/Common/Ourteam'
import Testimonials from '../../Component/Common/Testimonials'
import Contact from '../../Component/Common/Contact'


// 👉 Images (from Figma)
import img1 from "../../assets/ServicePage/img1.png";
import img2 from "../../assets/ServicePage/img2.png";
import img3 from "../../assets/ServicePage/img3.png";
import img4 from "../../assets/ServicePage/img4.png";
import img5 from "../../assets/ServicePage/img5.png";
import img6 from "../../assets/ServicePage/img6.png";
import WhyChoose from '../../Component/Service-page/WhyChoose'

const Services = () => {
  return (
    <>
      <Navbar />
      <ServiceHero />
      <SubHerosec />
      <div className="text-center text-white py-12 px-6 md:px-12 lg:px-20">


        <div className="mt-6 mb-5 flex gap-4 flex-wrap justify-center">
          <div className="px-4 py-2 w-44 rounded-full bg-white/10 backdrop-blur-lg border-t border-b border-white/60 text-white shadow-lg hover:scale-105 transition">
            Service
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl  mb-4">
          Comprehensive USA Career Consulting
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
          Our expert consulting services cover education, immigration, and employment opportunities, ensuring seamless support for professionals and students pursuing opportunities in the United States.
        </p>

      </div>
      <CareerSection
        title="Career in USA"
        description="Learn how top training programs help students prepare for professional build successful careers in the United States."
        image={img1}
        reverse={false}
        points={[
          { name: "Fully Funded Master's Program", path: "/masters-program" },
          { name: "F1 Visa Process", path: "/f1-visa" },
          { name: "H1B Visa Process", path: "/h1b-visa" },
          { name: "Job Placement in USA", path: "/job-placement" },
          { name: "Green Card in USA", path: "/green-card" },
        ]}
      />
      {/* SECTION 2 (REVERSED) */}
      <CareerSection
        title="Job Placement in USA"
        description="Strategic career support designed to connect skilled professionals with high-demand opportunities in the competitive U.S. job market."
        image={img2}
        reverse={true}
        points={[
          { name: "Resume & Profile Development", path: "/resume" },
          { name: "Interview Preparation & Mock Sessions", path: "/interview" },
          { name: "Employer Networking & Marketing", path: "/linkedin" },
          { name: "Skill Enhancement & Training", path: "/linkedin" },
          { name: "Offer Negotiation & Onboarding Support", path: "/linkedin" },
        ]}
      />
      {/* SECTION 3 */}
      <CareerSection
        title="Master's in USA"
        description="Comprehensive guidance to help students pursue advanced education in the United States with confidence, clarity, and strategic academic planning."
        image={img3}
        reverse={false}
        points={[
          { name: "University Selection & Counseling", path: "/universities" },
          { name: "Application & Documentation Support", path: "/sop" },
          { name: "Fully Funded Master’s Program", path: "/sop" },
          { name: "Admission & Offer Letter Assistance", path: "/sop" },
          { name: "Pre-Departure & Visa Guidance", path: "/sop" },
        ]}



      />
      <CareerSection
        title="Green Card In USA"
        description="Strategic career support designed to connect skilled professionals with high-demand opportunities in the competitive U.S. job market."
        image={img4}
        reverse={true}
        points={[
          { name: "Eligibility Assessment & Consultation", path: "/h1b-eligibility" },
          { name: "Employment-Based Green Card Support", path: "/h1b-process" },
          { name: "Documentation & Filing Assistance", path: "/h1b-process" },
          { name: "Process Tracking & Updates", path: "/h1b-process" },
          { name: "Long-Term Settlement Guidance", path: "/h1b-process" },
        ]}
      />
      <CareerSection
        title="F1 Visa Process"
        description="Structured, end-to-end guidance to help skilled professionals secure U.S. work authorization and advance their careers in the competitive American job market."
        image={img5}
        reverse={false}
        points={[
          { name: "Eligibility & Profile Evaluation", path: "/h1b-eligibility" },
          { name: "Employer Sponsorship Coordination", path: "/h1b-process" },
          { name: "Petition Filing & Documentation Support", path: "/h1b-process" },
          { name: "Lottery & Approval Guidance", path: "/h1b-process" },
          { name: "Post-Approval & Compliance Support", path: "/h1b-process" },
        ]}
      />
      <CareerSection
        title="F1 Visa Process"
        description="Complete, step-by-step guidance to help students secure U.S. study authorization and begin their academic journey with confidence."
        image={img6}
        reverse={true}
        points={[
          { name: "University Admission Assistance", path: "/h1b-eligibility" },
          { name: "Documentation & SEVIS Support", path: "/h1b-process" },
          { name: "Visa Interview Preparation", path: "/h1b-process" },
          { name: "Financial & Compliance Guidance", path: "/h1b-process" },
          { name: "Pre-Departure & Travel Support", path: "/h1b-process" },
        ]}
      />
      <OurTeam />
      <Testimonials />
      <Contact />
      <WhyChoose/>
      <Footer />
    </>

  )
}

export default Services