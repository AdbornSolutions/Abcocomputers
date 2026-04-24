/* eslint-disable no-unused-vars */
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#081b33] to-[#0d2a4d] text-white px-12 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LEFT SECTION */}
        <div>
          {/* Logo */}
          <div className="mb-4">
            <img
              src="/src/assets/common-images/abco-logo.png"
              alt="ABCO Computers"
              className="h-12"
            />
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            ABCO Computers supports aspiring IT professionals with skill-based
            training, guidance, and career opportunities to succeed in the
            global tech industry.
          </p>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-400 mb-6"></div>

          {/* Contact */}
          <div className="space-y-4 text-sm text-gray-300">

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
              <span className="leading-relaxed">
                Plot No.47, 3rd Floor, Katol Road, Khamla <br />
                Nagpur, Maharashtra, 440023 India.
              </span>
            </div>

          </div>
        </div>

        {/* MENU */}
        <div className="space-y-6 justify-items-start flex flex-col items-start">
          <h3 className="text-xxl font-semibold mb-6">Menu</h3>
          <ul className="space-y-3 text-gray-300 text-sm flex flex-col items-start">
            <li className="hover:text-white cursor-pointer text-lg">Home</li>
            <li className="hover:text-white cursor-pointer text-lg">About us</li>
            <li className="hover:text-white cursor-pointer text-lg">Services</li>
            <li className="hover:text-white cursor-pointer text-lg">Department</li>
            <li className="hover:text-white cursor-pointer text-lg">Learning</li>
            <li className="hover:text-white cursor-pointer text-lg">Contact us</li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div className="space-y-6 justify-items-start flex flex-col items-start">
          <h3 className="text-xxl font-semibold mb-6">Explore</h3>
          <ul className="space-y-3 text-gray-300 text-sm flex flex-col items-start">
            <li className="hover:text-white cursor-pointer text-lg">Careers</li>
            <li className="hover:text-white cursor-pointer text-lg">Blogs</li>
            <li className="hover:text-white cursor-pointer text-lg">Success Stories</li>
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h3 className="text-xxl font-semibold mb-6">Policies</h3>
          <ul className="space-y-3 text-gray-300 text-sm flex flex-col items-start">
            <li className="hover:text-white cursor-pointer text-lg">
              Term & Condition
            </li>
            <li className="hover:text-white cursor-pointer text-lg">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer text-lg">
              Refund & Return Policy
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;