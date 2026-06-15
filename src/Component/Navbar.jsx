import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/common-images/abco-logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Department", to: "/department" },
  { label: "Learning", to: "/learning" },
];

const insightItems = [
  { label: "Success Stories", to: "/success-stories" },
  { label: "Life at ABCO", to: "/life-at-abco" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 12);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `relative whitespace-nowrap transition-colors duration-300 hover:text-[#9ff7f7] ${
      isActive ? "text-[#2BD7D7]" : "text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-500 sm:px-4 ${
        isScrolled ? "pt-2" : "pt-3 sm:pt-4"
      }`}
    >
      <div
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 rounded-full border border-white/15
        bg-[#020617]/35 px-3 py-2 text-white backdrop-blur-xl sm:px-4 lg:bg-transparent lg:border-transparent lg:p-0 lg:backdrop-blur-0"
      >
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 items-center"
        >
          <img
            src={logo}
            alt="ABCO Computers"
            className="h-8 w-auto max-w-[150px] object-contain transition duration-300 hover:scale-105 sm:h-10 md:h-12"
          />
        </Link>

        <nav
          className="hidden items-center gap-5 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[15px]
          text-white backdrop-blur-xl transition-all duration-500 xl:gap-8 xl:px-8 xl:py-4 xl:text-[18px] lg:flex"
        >
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}

          <div className="group relative">
            <button className="flex items-center gap-1 whitespace-nowrap transition-colors duration-300 hover:text-[#9ff7f7]">
              Insights <ChevronDown size={14} />
            </button>

            <div className="invisible absolute left-1/2 top-full mt-2 w-52 -translate-x-1/2 rounded-2xl border border-white/15 bg-[#020617]/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {insightItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-white/10 text-[#2BD7D7]"
                        : "text-white hover:bg-white/10"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contactus"
            className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-md xl:px-6"
          >
            Contact us
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl premium-glass lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-x-3 top-[68px] z-50 rounded-2xl border border-white/20 bg-[#020617]/95 p-5 text-white shadow-2xl backdrop-blur-xl premium-glass sm:inset-x-4 sm:top-[78px] lg:hidden">
          <nav className="flex flex-col gap-1 text-center">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-[15px] transition ${
                    isActive
                      ? "bg-white/10 text-[#2BD7D7]"
                      : "text-white hover:bg-white/10"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="my-2 border-t border-white/10 pt-3">
              <p className="mb-2 text-xs uppercase tracking-[0.24em] text-white/40">
                Insights
              </p>
              {insightItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-[15px] transition ${
                      isActive
                        ? "bg-white/10 text-[#2BD7D7]"
                        : "text-white hover:bg-white/10"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <Link
              to="/contactus"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black transition hover:bg-white/80"
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
