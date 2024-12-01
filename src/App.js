
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header.js";
import AboutUs from "./Components/AboutUS/aboutus.js";
import Manufacture from "./Components/Manufacturer/manufacturer.js";
import Adthermal from "./Components/Adthermal/adthermal.js";
import HighPerformanceProduct from "./Components/Header/highperformance.js";
import Manufactureservices from "./Components/Manufacture-services/manufactureservices.js";

import Contact from "./Components/Contact-us/contact.js";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/manufacture" element={<Manufacture />}/>
        <Route path="/adthermal" element={<Adthermal/>}/>
        <Route path="/HighPerformanceProduct" element={<HighPerformanceProduct/>}/>
        <Route path="/manufactureservices" element={<Manufactureservices />} />

        <Route path="/contact" element={<Contact />}/>

      </Routes>
    </Router>
  );
};

export default App;
