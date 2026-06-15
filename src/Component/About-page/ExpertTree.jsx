import React, { useEffect } from "react";

const testimonials = [
  { top: "35%", left: "10%", img: "Ellipse-10-2.png", text: "Highly recommend for gifting", default: true },
  { top: "55%", left: "47%", img: "Ellipse-15-1.png", text: "Elegant gifts, timely delivery", default: true },
  { top: "1%", left: "78%", img: "Ellipse-18.png", text: "Made our event memorable", default: true },
  { top: "92%", left: "66%", img: "Ellipse-22.png", text: "Absolutely loved the quality", default: true },

  { top: "15%", left: "62%", img: "Ellipse-17.png", text: "Absolutely loved the quality" },
  { top: "70%", left: "95%", img: "Ellipse-20.png", text: "Made our event memorable" },
  { top: "65%", left: "82%", img: "Ellipse-21.png", text: "Made our event memorable" },
  { top: "28%", left: "85%", img: "Ellipse-19.png", text: "Made our event memorable" },
  { top: "90%", left: "35%", img: "Ellipse-14-1.png", text: "Elegant gifts, timely delivery" },
  { top: "10%", left: "42%", img: "Ellipse-16-1.png", text: "Elegant gifts, timely delivery" },
  { top: "68%", left: "-2%", img: "Ellipse-11-1.png", text: "Elegant gifts, timely delivery" },
  { top: "91%", left: "14%", img: "Ellipse-12-1.png", text: "Elegant gifts, timely delivery" },
  { top: "55%", left: "22%", img: "Ellipse-13-1.png", text: "Elegant gifts, timely delivery" },
  { top: "-10%", left: "18%", img: "Ellipse-9-1.png", text: "Elegant gifts, timely delivery" },
];

const ExpertTree = () => {

  useEffect(() => {
    const handleClick = (e) => {
      const point = e.target.closest(".testimonial-point");

      if (!point) {
        document.querySelectorAll(".testimonial-point:not(.default-visible)")
          .forEach(p => p.classList.remove("active"));
        return;
      }

      if (point.classList.contains("default-visible")) return;

      document.querySelectorAll(".testimonial-point:not(.default-visible)")
        .forEach(p => p.classList.remove("active"));

      point.classList.add("active");
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <section className="hidden md:block w-full bg-[#060B14] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16">

      {/* ===== HEADING ===== */}
      <div className="text-center mb-24">
        <h2 className="text-[28px] md:text-[40px] font-medium">
          Experts Behind the Innovation
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* PATH IMAGE (WHITE EFFECT) */}
        <img
          src="https://sayalicreations.com/wp-content/uploads/2026/01/Vector-3.png"
          alt="path"
          className="w-full opacity-80 invert brightness-200"
        />

        {/* POINTS */}
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={`testimonial-point absolute cursor-pointer 
            ${item.default ? "default-visible" : ""}`}
            style={{ top: item.top, left: item.left }}
          >

            {/* AVATAR */}
            <img
              src={`https://sayalicreations.com/wp-content/uploads/2026/01/${item.img}`}
              alt="user"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white shadow-lg"
            />

            {/* POPUP */}
            <div className="testimonial-popup absolute -top-12 left-1/2 -translate-x-1/2 
            bg-black text-white px-4 py-2 rounded-full text-xs md:text-sm 
            whitespace-nowrap shadow-lg opacity-0 pointer-events-none 
            transition-all duration-300">
              {item.text}

              {/* ARROW */}
              <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 
              w-0 h-0 border-l-[6px] border-l-transparent 
              border-r-[6px] border-r-transparent 
              border-t-[6px] border-t-black"></div>
            </div>

          </div>
        ))}

      </div>

      {/* STATE CONTROL */}
      <style>
        {`
        .testimonial-point.active .testimonial-popup {
          opacity: 1;
          pointer-events: auto;
        }

        .testimonial-point.default-visible .testimonial-popup {
          opacity: 1;
          pointer-events: auto;
        }

        .testimonial-point:not(.default-visible):hover .testimonial-popup {
          opacity: 1;
          pointer-events: auto;
        }
        `}
      </style>

    </section>
  );
};

export default ExpertTree;
