import React from "react";
import departmentHero from "../../assets/DepartmentPage/departmentHero.png";
import Counter from "../../Component/Common/Counter";

const DepartmentHero = () => {
  return (
    <section className="w-full min-h-screen bg-[#060B14] text-white flex items-center px-4 md:px-10 lg:px-20 pt-24 pb-40 md:py-24 relative overflow-hidden">

      {/* 🔵 CYAN GLOW */}

      {/* ⚪ WHITE BLUR ELLIPSE (LEFT) */}
      <div
        className="absolute z-0"
        style={{
          width: "147px",
          height: "147px",
          top: "69px",
          left: "0px",
          background: "#FFFFFF",
          opacity: 1,
          filter: "blur(261.66px)",
        }}
      ></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full">

        {/* ===== LEFT ===== */}
        <div>

          {/* HEADING */}
          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[47px] font-semibold leading-tight">
            Specialized Teams.
            Unified Consulting Excellence.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mt-6 text-[14px] md:text-[16px] max-w-xl leading-relaxed">
            Our structured departments collaborate seamlessly to deliver strategic consulting,
            innovative technology solutions, and measurable business outcomes. With specialized
            expertise across multiple domains, we ensure precision, accountability, and impactful
            results tailored to your organizational goals.
          </p>

          {/* BUTTON */}
          <button
  className="mt-8 px-8 py-3 rounded-full text-white font-medium text-lg 
  relative overflow-hidden transition duration-300 hover:scale-105"
  style={{
    background: "linear-gradient(180deg, #0073FF 0%, #0DA2FF 100%)",

    border: "0px solid",
    borderImageSlice: 1,
    borderImageSource:
      "linear-gradient(180deg, rgba(0, 136, 255, 0.3) 0%, rgba(119, 192, 255, 0.3) 100%)",

    boxShadow: `
      0px 0px 0px 5px #FFFFFF,
      0px 0px 0px 4px #E0E9F2,
      0px 3.71px 4.85px #57B1FF27,
      0px 10.27px 13.4px #57B1FF38,
      0px 24.72px 32.26px #57B1FF30,
      0px 42px 107px #57B1FF57,
      inset 0px 1px 4px 2px #D2EAFF,
      inset 0px 1px 18px 2px #D2EAFF
    `,
  }}
>
  Explore Our Department
</button>

        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="flex justify-center md:justify-end">
          <img
            src={departmentHero}
            alt="Department"
            className="w-[250px] sm:w-[320px] md:w-[420px] lg:w-[500px] object-contain"
          />
        </div>

      </div>



{/* ===== BOTTOM STATS ===== */}
<div className="absolute bottom-6 left-0 w-full flex justify-center z-10 px-4">

  <div
    className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-16 text-white text-center"
    style={{
      fontFamily: "Merienda One",
      fontWeight: 400,
      fontSize: "clamp(13px, 3.6vw, 30px)",
      lineHeight: "100%",
      letterSpacing: "0%",
    }}
  >
    
    <span className="flex items-center gap-1">
      <Counter end={380} /> User Active
    </span>

    <span className="hidden sm:inline">|</span>

    <span className="flex items-center gap-1">
      <Counter end={230} /> Trusted By Company
    </span>

    <span className="hidden sm:inline">|</span>

    <span className="flex items-center gap-1">
      <Counter end={500} /> Reviews
    </span>

  </div>
</div>

    </section>
  );
};

export default DepartmentHero;
