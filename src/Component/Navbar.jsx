import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/common-images/abco-logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Department", to: "/department" },
  { label: "Learning", to: "/learning" },
  { label: "Contact us", to: "/contactus" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50 flex justify-center mt-3 sm:mt-4 px-3 sm:px-4">
      <div className="w-full max-w-6xl flex items-center justify-between gap-3">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={logo}
            alt="ABCO Computers"
            className="h-10 md:h-12 object-contain cursor-pointer hover:scale-105 transition"
          />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-5 xl:gap-8 px-5 xl:px-8 py-3 xl:py-4
          bg-white/10 backdrop-blur-md border border-white/20
          rounded-full shadow-md text-white text-[15px] xl:text-[18px]"
        >
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className="whitespace-nowrap">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            className="px-5 xl:px-6 py-3 rounded-full
            bg-white/10 backdrop-blur-md border border-white/20
            text-white hover:bg-white/20 transition whitespace-nowrap"
          >
            Book a call
          </button>
        </div>

        <button
          type="button"
          className="lg:hidden text-white text-3xl leading-none cursor-pointer w-11 h-11 rounded-full bg-white/10 border border-white/20"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "x" : "="}
        </button>
      </div>

      {menuOpen && (
        <div
          className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] max-w-sm
          bg-[#020617]/95 backdrop-blur-md border border-white/20
          rounded-2xl p-6 flex flex-col gap-5 text-white text-center shadow-lg lg:hidden"
        >
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}

          <button
            className="mt-2 px-6 py-3 rounded-full
            bg-white text-black hover:bg-white/80 transition"
          >
            Book a call
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
