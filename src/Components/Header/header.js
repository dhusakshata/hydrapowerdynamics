
import React, { useState } from "react";
 import "./header.css"; 
import { Link } from "react-router-dom";

 import logo from "../../Images/hydra1.webp"; 
 import hydra2 from "../../Images/hydra2.webp"; 
//  import HighPerformanceProduct from "./highperformance.js"; 
 import hydra4 from "../../Images/hydra4.jpg"; 

 import logo1 from "../../Images/bae-system.webp"; 
 import logo2 from "../../Images/g&G.webp";
 import logo3 from "../../Images/simense.webp";
 import logo4 from "../../Images/perkins.webp";
 import logo5 from "../../Images/Alstrom logo.webp";

 import iso1 from "../../Images/iso1.webp";
 import iso2 from "../../Images/iso2.webp";
 import iso3 from "../../Images/iso3.webp";
 import joscar from "../../Images/joscar.webp";

 import hydrapower from "../../Images/hydrapower.webp";

 import twitter from "../../Images/twitter image.webp";
 import linkedin from "../../Images/linked in image.webp";


 const Header = () => {
   const [showNewContent, setShowNewContent] = useState(false);

   const handleButtonClick = () => 
     setShowNewContent(true); 
   

 return (
   <div>
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

      {/* Main Performance Section */}
       <div className="main-perform">
         {/* {showNewContent ? (
          <HighPerformanceProduct /> // Render the imported component when button clicked
        ) : (  
          <>  */}
            {/* This section is hidden after button is clicked */}
            <div className="perform-head">
              <h1>HIGH PERFORMANCE</h1>
              <h2>fluid handling products</h2>
           </div>
            <p>
              hydraPower dynamics manufacture and supply high quality fluid handling assemblies across a
               multitude of industries.
            </p>
           <button className="performa-button" onClick={handleButtonClick}>
           <Link to="/HighPerformanceProduct">HIGH PERFORMANCE PRODUCT</Link>
             </button>
             <div className="logo-container">
               <img src={hydra2} alt="hydra2" className="hydra2" />
             </div>
            {/* </>
         )} */}
       
      
       </div>
    
    </div>
    <div className="second-perform">
     <h1>CONCEPT 2 COMPLETION</h1>
     <p>At hydraPower dynamics we offer all our clients a concept 2 completion service. Beginning with innovative concepts our service progresses through to material selection, prototyping and culminates in production. Upheld by rigorous testing and quality assurance, all our products ensure compliance, safety, and reliability.</p>

   </div>

   <div
         className="advanced-thermal"
         style={{
           backgroundImage: `url(${hydra4})`,
         }}
       >
         <div className="advanced-content">
           <h1>ADVANCED THERMAL MANAGEMENT SYSTEMS</h1>
          <p>
            Our Silicone manufacturing and electric vehicle fluid handling system
             division, partners with industry leading companies building electric
             vehicles that use battery and hydrogen fuel cell technology to store
             and deliver power. We have a rich experience in supplying silicone-based
             fluid handling thermal management systems to global leading OEM customers
             operating at the cutting edge of this new and rapidly developing technology.
           </p>
           <button className="performa-button" onClick={handleButtonClick}>
           <Link to="/adthermal">ADVANCED THERMAL MANAGEMENT SYSTEM</Link>
             </button>
         </div>
       </div>
 <div className="trusted-world">
   <div className="trusted-content">
    
   <h1>
   TRUSTED BY THE WORLD'S LARGEST
   </h1>
 <p>At hydraPower dynamics, we take great pride in our legacy of excellence, expertise, and innovation in the silicone hose manufacturing industry. With a track record spanning more than three decades, we have become a trusted name and a global leader in providing top-quality fluid handling systems to a diverse range of industries and applications.

 </p>
   </div>
 </div>
 <div className="logo-world">
       <img src={logo1} alt="Logo 1" className="logo-item" />
       <img src={logo2} alt="Logo 2" className="logo-item" />
       <img src={logo3} alt="Logo 3" className="logo-item" />
       <img src={logo4} alt="Logo 4" className="logo-item" />
       <img src={logo5} alt="Logo 5" className="logo-item" />
     </div>

     <div className="hydrapower-section">
       <div className="image-container">
         <img src={hydrapower} alt="HydraPower" className="hydra-image" />
       </div>
       <div className="info-container">
         <h1>UK & USA</h1>
         <p>
           Established in 1983, HydraPower Dynamics is a manufacturer of fluid
           handling systems incorporating hoses, manipulated tubes & fabricated
           assemblies.
         </p>
         <p>
           Operating out of the UK and the US, we offer a range of world-class
           quality products and solutions to our international customers across a
           diverse range of applications and industries.
         </p>
         <p>Our commitment in providing a total service from "concept to
           completion" is supported by flexibility in delivery and through
           product innovation.
         </p>
         <button className="performa-button" onClick={handleButtonClick}>
         <Link to="/about">ABOUT Us</Link>
             </button>
       </div>
     </div>

     <div className="delivering-standard">
   <div className="delivering-content">
    
   <h1>
   DELIVERING TO THE HIGHEST STANDARDS
   </h1>
 <p>
 In accordance with our accreditation bodies we routinely deliver product that complies with the rigorous high standards of manufacture set by our own quality control department. This is at the corner stone of hydraPower dynamics success and provides our partners with the confidence that all our services and products meet and exceed industry standards.

 </p>
   </div>
 </div>
 <div className="iso-world">
       <img src={iso1} alt="iso 1" className="iso-item" />
       <img src={iso2} alt="iso 2" className="iso-item" />
       <img src={iso3} alt="iso 3" className="iso-item" />
       <img src={joscar} alt="joscar" className="iso-item" />
     
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
export default Header;

