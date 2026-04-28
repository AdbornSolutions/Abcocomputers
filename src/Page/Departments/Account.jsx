import React from "react";

// 🔥 COMPONENTS
import Navbar from "../../Component/Navbar";
import DepartmentHero from "../../Component/Departments-page/DHeroSec";
import AboutServiceSection from "../../Component/Departments-page/AboutthisService";
import ProcessFlow from "../../Component/Departments-page/ProcessFlow";
import TimelineTemplate from "../../Component/Departments-page/OurOnboarding";
import WhyChooseOurAT from "../../Component/Departments-page/WhyChooseOurAT";
import FAQ from "../../Component/Common/FAQ";
import Contact from "../../Component/Common/Contact";
import Footer from "../../Component/Footer";

// 🔥 IMAGE (use your own)
import serviceImg from "../../assets/DepartmentPage/aboutservice2.png";
import serviceImg2 from "../../assets/DepartmentPage/accout-timeline.png";

const Account = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <DepartmentHero
        breadcrumb="Department > Accounts Department"
        heading="Financial Accuracy. Transparent Processes."
        description="Our Accounts Department ensures structured financial management, transparent transactions, and accurate record-keeping. We maintain compliance, clarity, and accountability across all financial operations to support smooth organizational and client processes."
        primaryBtn="Contact Accounts Team"
        secondaryBtn="Financial Assistance Support"
      />

      {/* ================= ABOUT ================= */}
      <AboutServiceSection
        tag="About this Service"
        heading="Structured Financial Management"
        description1="Our Accounts Department manages all financial activities with structured processes and strict compliance standards. From secure payment processing and scholarship documentation to transaction tracking and financial reporting, we ensure accuracy, clarity, and seamless coordination across departments."
        description2="We maintain disciplined record-keeping practices that promote financial transparency and operational efficiency."
        buttonText="Learn More →"
        image={serviceImg}
      />

      {/* ================= PROCESS FLOW ================= */}
      <ProcessFlow
        tag="Our Key Responsibilities"
        heading="Core Financial Responsibilities"
        subheading="Structured financial oversight ensuring transparency, compliance, and operational efficiency."
        steps={[
          { id: "01", title: "Payment Processing", desc: "Secure and systematic management of all financial transactions ensuring accuracy, traceability, and timely confirmations." },
          { id: "02", title: "Financial Documentation", desc: "Maintenance of detailed financial records and supporting documentation to ensure transparency and compliance." },
          { id: "03", title: "Scholarship & Funding Records", desc: "Structured verification and monitoring of scholarship documents and funding-related transactions." },
          { id: "04", title: "Financial Guidance & Support", desc: "Clear communication and professional assistance for financial documentation and process-related queries." },
          { id: "05", title: "Invoice & Billing Management", desc: "Preparation, validation, and tracking of invoices, billing statements, and payment confirmations." },
          { id: "06", title: "Compliance & Audit Support", desc: "Adherence to financial regulations and structured audit support to maintain accountability." },
        ]}
      />

      {/* ================= TIMELINE ================= */}
      <TimelineTemplate
        titleSmall="Our"
        titleMain={"Structured Financial Process"}
        image={serviceImg2}
        timelineItems={[
          { side: "right", title: "Documentation Review", text: "Thorough verification of required documents to ensure accuracy, completeness, and readiness for the onboarding process." },
  { side: "left", title: "Compliance Verification", text: "Ensuring all legal, regulatory, and organizational compliance requirements are properly met before final confirmation." },
  { side: "right", title: "Contract Finalization", text: "Preparation, review, and confirmation of employment agreements to establish clear terms and expectations." },
  { side: "left", title: "Onboarding Coordination", text: "Facilitating structured communication between candidate and employer to ensure a smooth transition into the role." },
  { side: "right", title: "Employee Record Management", text: "Providing essential guidance on company systems, policies, and operational procedures for confident integration." },
  { side: "left", title: "Continuous HR Support", text: "Ongoing HR assistance and monitoring during the initial employment phase to ensure stability and professional success." },
]}
      />

      {/* ================= WHY CHOOSE ================= */}
      <WhyChooseOurAT />

      {/* ================= FAQ ================= */}
      <FAQ
        tag="FAQ"
        heading="Frequently Asked Question"
        description="Find clear answers to common questions about admissions, visa processes, placements, and building your IT career in the USA."
        questions={[
          {
            question: "What payment methods are accepted?",
            answer: "We accept bank transfers, UPI, and other secure payment methods for all transactions.",
          },
          {
            question: "How is financial documentation managed?",
            answer: "All financial records are maintained securely with full transparency and compliance tracking.",
          },
          {
            question: "Do you provide funding documentation support?",
            answer: "Yes, we assist with scholarship and funding documentation processes.",
          },
          {
            question: "Is the process transparent?",
            answer: "Absolutely. We ensure complete transparency in all financial operations and reporting.",
          },
        ]}
      />

      {/* ================= CONTACT ================= */}
      <Contact />

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
};

export default Account;