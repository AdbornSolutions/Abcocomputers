import React from "react";
import logo from "../assets/common-images/abco-logo.png";

const WelcomeLoader = ({ isLeaving = false }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] grid place-items-center bg-[#060B14] text-white transition-all duration-700 ${
        isLeaving ? "pointer-events-none opacity-0 scale-[1.02]" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[90px] sm:h-[520px] sm:w-[520px]"></div>
        <div className="welcome-loader-grid"></div>
      </div>

      <div className="relative z-10 flex w-full max-w-[88vw] flex-col items-center text-center">
        <div className="welcome-logo-orbit mb-6 grid h-24 w-24 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl sm:h-28 sm:w-28">
          <img src={logo} alt="ABCO Computers" className="w-16 sm:w-20" />
        </div>

        <p className="mb-3 text-xs uppercase tracking-[0.38em] text-cyan-100/80">
          Welcome to
        </p>

        <h1 className="font-heading text-[34px] leading-tight sm:text-[48px]">
          ABCO Computers
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
          Preparing your gateway to USA IT careers, training, visa guidance, and
          placement support.
        </p>

        <div className="mt-8 h-[3px] w-full max-w-xs overflow-hidden rounded-full bg-white/10">
          <div className="welcome-progress h-full rounded-full bg-gradient-to-r from-white via-cyan-200 to-[#2BD7D7]"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeLoader;
