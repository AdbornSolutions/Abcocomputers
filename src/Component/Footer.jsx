/* eslint-disable no-unused-vars */
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0b1c34] to-[#0f2a4d] text-white px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Left Section */}
        <div>
          <div className="mb-3">
            <img src="/logo.png" alt="ABCO Computers" className="h-12 w-auto"/>
           </div>
          <p className="text-sm text-gray-300 mb-4">
            ABCO Computers supports aspiring IT professionals with skill-based
            training, guidance, and career opportunities to succeed in the
            global tech industry.
          </p>

          <div className="space-y-3 text-sm text-gray-300">

  <div className="flex items-center gap-3">
    <div className="bg-white text-black p-2 rounded-full">
      <Phone size={14} />
    </div>
    <span>+91-9370181988</span>
  </div>

  <div className="flex items-center gap-3">
    <div className="bg-white text-black p-2 rounded-full">
      <Mail size={14} />
    </div>
    <span>hr-manager@abcocomputers.com</span>
  </div>

  <div className="flex items-start gap-3">
    <div className="bg-white text-black p-2 rounded-full mt-1">
      <MapPin size={14} />
    </div>
    <span>
      Plot No.47, 3rd Floor, Katol Road, Khamla<br />
      Nagpur, Maharashtra, 440023 India.
    </span>
  </div>

</div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Department</li>
            <li>Learning</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Careers</li>
            <li>Blogs</li>
            <li>Success Stories</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Refund & Return Policy</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;