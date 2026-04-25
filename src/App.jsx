import React from "react";
import { Routes, Route } from "react-router-dom";


// Pages
import Home from "./Page/Home";
import About from "./Page/About";
import Contactus from "./Page/Contactus";
import Services from "./Page/Services/Services";
import Department from "./Page/Departments/Department";
import Learning from "./Page/Learning";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/department" element={<Department />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </>
  );
};

export default App;