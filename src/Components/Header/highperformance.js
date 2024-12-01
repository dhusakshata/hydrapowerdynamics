

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./highperformance.css";

import logo from "../../Images/hydra1.webp"; 
import hydra3 from "../../Images/hydra3.jpg";
import hydra4 from "../../Images/hydra4.jpg";
import hydra5 from "../../Images/hydra5.webp";
import hydra6 from "../../Images/hydra6.webp";
import hydra7 from "../../Images/hydra7.webp";
import hydra8 from "../../Images/hydra8.webp";
import hydra9 from "../../Images/hydra9.webp";
import hydra10 from "../../Images/hydra10.webp";

import twitter from "../../Images/twitter image.webp";
import linkedin from "../../Images/linked in image.webp";

const HighPerformanceProduct = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Information for each image
  const imageInfo = {
    hydra5: "Automotive: High-quality fluid handling systems for extreme temperature operations in vehicles.",
    hydra6: "Commercial Vehicle: Optimized cooling systems for heavy-duty and battery-powered commercial vehicles.",
    hydra7: "Renewable Energy: Advanced fluid management for solar, wind, and hydrogen energy systems.",
    hydra8: "Defence: Durable and efficient fluid handling solutions for defense applications.",
    hydra9: "Marine: Reliable solutions for marine vessels operating in harsh environments.",
    hydra10: "Rail: High-performance systems for trains, ensuring safety and efficiency.",
  };

  return (
    
    <div className="container">

<div className="mainheader">
       {/* Navbar Section - Always Visible */}
       <header className="header">         <div className="logo-container">
           <img src={logo} alt="Logo" className="logo" />
         </div>
         <nav className="nav">
            <Link to="/about">ABOUT</Link>
           <Link to="/manufacture">MANUFACTURE</Link>
           <Link to="/adthermal">ADVANCED THERMAL MANAGEMENT SYSTEM</Link>
           <Link to="/HighPerformanceProduct">HIGH PERFORMANCE PRODUCT</Link>
           <Link to="/manufactureservices">MANUFACTURING SERVICES</Link>
           <Link to="/contact">CONTACT US</Link>
         </nav>      
          </header>
          </div>

      {/* First Section */}
      <div
        className="highperform-fullpage"
        style={{
          backgroundImage: `url(${hydra3})`,
        }}
      >
        <div className="highperform-content">
          <h1>NEW HIGH-PERFORMANCE PRODUCT</h1>
          <h2>
            At hydraPower dynamics our team of specialist engineers work across
            many industry sectors, delivering technically advanced fluid handling
            products capable of performing in high-stress environments.
          </h2>
          <p>
            We understand that every application is unique, and that's why we offer
            a personalised approach to help you find the perfect solution for your
            specific requirements. Our team of highly skilled engineers and
            knowledgeable professionals are always ready to provide expert
            guidance, technical support, and tailor-made recommendations to ensure
            you achieve optimal results.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div
        className="highperform-fullpage2"
        style={{
          backgroundImage: `url(${hydra4})`,
        }}
      >
        <div className="highperform-content2">
          <h1>ADVANCED THERMAL MANAGEMENT SYSTEMS</h1>
          <p>
            Our Silicone manufacturing and electric vehicle fluid handling system
            division, partners with industry leading companies building electric
            vehicles that use battery and hydrogen fuel cell technology to store
            and deliver power. We have a rich experience in supplying silicone-based
            fluid handling thermal management systems to global leading OEM customers
            operating at the cutting edge of this new and rapidly developing technology.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="third-section">
        <div className="highperform-content3">
          <h1>PRODUCT | APPLICATIONS</h1>
          <p>
            Working with our clients, we offer manipulated tubes, various hoses, and
            high-performance fluid handling solutions that have become recognized as
            industry-leading innovative products. From silicone hose systems that
            operate at extreme temperatures to cooling systems installed on the latest
            electric battery-powered commercial vehicles, we deliver the best-optimized
            solutions across a wide range of diverse applications.
          </p>
        </div>
      </div>

      {/* Fourth Section with Hoverable Images */}
      <div className="fourth-section">
        <div className="image-container">
          {[
            { src: hydra5, alt: "Hydra5", key: "hydra5" },
            { src: hydra6, alt: "Hydra6", key: "hydra6" },
            { src: hydra7, alt: "Hydra7", key: "hydra7" },
            { src: hydra8, alt: "Hydra8", key: "hydra8" },
            { src: hydra9, alt: "Hydra9", key: "hydra9" },
            { src: hydra10, alt: "Hydra10", key: "hydra10" },
          ].map((image) => (
            <div
              key={image.key}
              className="image-item"
              onMouseEnter={() => setHoveredImage(image.key)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <p>{image.alt.toUpperCase()}</p>
              <img src={image.src} alt={image.alt} />
              {hoveredImage === image.key && (
                <div className="hover-info">{imageInfo[image.key]}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-section">
    <h1>hydraPower dynamics</h1>

    <div className="address-section">
      
       
         <div className="address-info">
           <h3>hydraPower dynamics Ltd. UK</h3>
           <p>St. Marks Street | Birmingham | United 
             Kingdom | B1 2UN</p>
           <p>+44 (0)121 456 5656</p>
        
           <h3>hydraPower dynamics USA</h3>
           <p>1501 Wohlert Street | Angola | Indiana | </p>
           <p>46703</p>
           <p>+1 (0) 260 624 0828</p>
         
     <div className="social-media-links">
         <a href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noopener noreferrer">
         <img src={twitter} alt="twitter" className="social-icon" />
         </a>
         <a href="https://linkedin.com/company/yourLinkedInHandle" target="_blank" rel="noopener noreferrer">
             <img src={linkedin} alt="LinkedIn" className="social-icon" />
         </a>
     </div>
         <p>Copyright 2024 hydraPower dynamics - All rights reserved</p>
       </div>
     </div>
     <div className="manufacture-section">
       <div className="manufacture-container">
         <h2>CUSTOM MANUFACTURE</h2>
         <div className="manufacture-services">
           <div className="service-group">
             <h3>Engineered Silicone Hose Products</h3>
             <h3>Bend Tooling</h3>
             <h3>Tube Manipulation</h3>
             <h3>Brazing</h3>
             <h3>Nylon Forming</h3>
             <h3>Welding</h3>
             <h3>Tube End Forming</h3>
            <h3>Nylon Loom Building</h3>
            <h3>Hose Assembly</h3>
            <h3>Pressure Testing</h3>
            <h3>Sub Assembly & Kitting</h3>
           </div>

        </div>
      </div>
       <p>Privacy Policy   |   Terms and Conditions  </p>
     </div>

     <div className="thermal-section">
       <div className="thermal-container">
         <h2>ADVANCED THERMAL MANAGEMENT SYSTEMS</h2>
         <div className="thermal-services">
           <h3>OATMaster</h3>
           <h3>Engineered Silicone Hose</h3>
           <h3>Advanced Couplings</h3>
           <h3>Assembly & Rapid </h3>
           <h3>Prototyping</h3>
         </div>
       </div>
     </div>
     <div className="links-section">
       <div className="links-container">
         <h2>Links</h2>
         <ul className="links-list">
         <li><Link to="/about">ABOUT</Link></li>
           <li><a href="#uk-division">UK Division</a></li>
           <li><a href="#us-division">US Division</a></li>
           <li><a href="#vacancies">Vacancies</a></li>
           <li><a href="#accreditations">Accreditations</a></li>
           <li><a href="#news">News</a></li>
           <li> <Link to="/contact">CONTACT US</Link></li>
         </ul>
       </div>
     </div>

    </div>
    </div>
  );
};

export default HighPerformanceProduct;
