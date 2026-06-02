import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/common-images/abco-logo.png";

import phoneIcon from "../assets/common-images/phone.png";
import mailIcon from "../assets/common-images/mail.png";
import mapIcon from "../assets/common-images/map.png";

const Footer = () => {
  return (
    <footer className="bg-[#101826] text-white px-4 sm:px-6 md:px-10 py-10">

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* LEFT */}
    <div>
      
      <img
        src={logo}
        alt="ABCO Computers"
        className="h-10 sm:h-12 mb-4"
      />

      <p className="text-[13px] leading-relaxed mb-5">
        ABCO Computers supports aspiring IT professionals with skill-based
        training, guidance, and career opportunities to succeed in the
        global tech industry.
      </p>

      <div className="w-full h-[1px] bg-white mb-5 opacity-40"></div>

      <div className="space-y-4 text-[13px]">

        <a href="tel:+919370181988" className="flex items-center gap-3 hover:text-[#2BD7D7] transition-colors cursor-pointer">
          <img src={phoneIcon} className="w-5 h-5" />
          <span>  +1 870 2102450</span>
        </a>

        <a href="mailto:hr-manager@abcocomputers.com" className="flex items-center gap-3 hover:text-[#2BD7D7] transition-colors cursor-pointer">
          <img src={mailIcon} className="w-5 h-5" />
          <span className="break-all">hr-manager@abcocomputers.com</span>
        </a>

        <div className="flex items-start gap-3">
          <img src={mapIcon} className="w-5 h-5 mt-1" />
          <span className="text-[12px]">
            Plot No. 47, 3rd Floor, Kotwal Nagar, Khamla, Laxmi Nagar , Nagpur, Maharashtra, India, 440022 
            
          </span>
        </div>

      </div>
    </div>

    {/* MENU */}
    <div>
      <h3 className="text-[18px] md:text-[22px] font-semibold mb-5">Menu</h3>
      <ul className="space-y-3 text-[14px] md:text-[15px]">
        <li>
          <Link to="/" className="hover:text-[#2BD7D7] transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#2BD7D7] transition-colors">About us</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-[#2BD7D7] transition-colors">Services</Link>
        </li>
        <li>
          <Link to="/department" className="hover:text-[#2BD7D7] transition-colors">Department</Link>
        </li>
        <li>
          <Link to="/learning" className="hover:text-[#2BD7D7] transition-colors">Learning</Link>
        </li>
        <li>
          <Link to="/contactus" className="hover:text-[#2BD7D7] transition-colors">Contact us</Link>
        </li>
      </ul>
    </div>

    {/* EXPLORE */}
    <div>
      <h3 className="text-[18px] md:text-[22px] font-semibold mb-5">Explore</h3>
      <ul className="space-y-3 text-[14px] md:text-[15px]">
        <li>
          <Link to="/services" className="hover:text-[#2BD7D7] transition-colors">Careers</Link>
        </li>
        <li>
          <span className="hover:text-[#2BD7D7] transition-colors cursor-pointer">Blogs</span>
        </li>
        <li>
          <span className="hover:text-[#2BD7D7] transition-colors cursor-pointer">Success Stories</span>
        </li>
      </ul>
    </div>

    {/* POLICIES */}
    <div>
      <h3 className="text-[18px] md:text-[22px] font-semibold mb-5">Policies</h3>
      <ul className="space-y-3 text-[14px] md:text-[15px]">
        <li>
          <span className="hover:text-[#2BD7D7] transition-colors cursor-pointer">
            Term & Condition
          </span>
        </li>
        <li>
          <span className="hover:text-[#2BD7D7] transition-colors cursor-pointer">
            Privacy Policy
          </span>
        </li>
        
      </ul>
    </div>

  </div>
</footer>
  );
};

export default Footer;
