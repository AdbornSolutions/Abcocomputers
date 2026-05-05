/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Page/Home";
import About from "./Page/About";
import Contactus from "./Page/Contactus";
import Services from "./Page/Services/Services";
import Department from "./Page/Departments/Department";
import Learning from "./Page/Learning";

// Department Pages
import HrOnboarding from "./Page/Departments/HrOnboarding";
import Admission from "./Page/Departments/Admission";
import Accounts from "./Page/Departments/Account";
import Training from "./Page/Departments/Training";
import Marketing from "./Page/Departments/Marketing";
import Contracts from "./Page/Departments/Contracts";
import Immigration from "./Page/Departments/immigrations&legal";
import Advisory from "./Page/Departments/AdvisoryTeam";

// Service Pages
import ItCareer from "./Page/Services/ItCareer";
import ItJobPlacements from "./Page/Services/ItJobPlacements";
import MasterinUsa from "./Page/Services/MasterinUsa";
import GreenCard from "./Page/Services/GreenCard";
import F1visa from "./Page/Services/F1visa";
import H1Bvisa from "./Page/Services/H1Bvisa";

const App = () => {
  return (
    <Routes>
      {/* MAIN */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/services" element={<Services />} />
      <Route path="/department" element={<Department />} />
      <Route path="/learning" element={<Learning />} />

      {/* DEPARTMENTS */}
      <Route path="/hr-onboarding" element={<HrOnboarding />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/training" element={<Training />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/contracts" element={<Contracts />} />
      <Route path="/immigration" element={<Immigration />} />
      <Route path="/advisory" element={<Advisory />} />

      {/* SERVICES */}
      <Route path="/it-career" element={<ItCareer />} />
      <Route path="/it-job-placements" element={<ItJobPlacements />} />
      <Route path="/masters-in-usa" element={<MasterinUsa />} />
      <Route path="/green-card" element={<GreenCard />} />
      <Route path="/f1-visa" element={<F1visa />} />
      <Route path="/h1b-visa" element={<H1Bvisa />} />
    </Routes>
  );
};

export default App;