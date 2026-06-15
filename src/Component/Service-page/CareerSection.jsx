import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../Common/ScrollReveal";

const CareerSection = ({ title, description, points, image, reverse, linkPath }) => {
  return (
    <section className="text-white py-16 px-6 md:px-12 lg:px-20">
      
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* CONTENT */}
        <ScrollReveal
          variant={reverse ? "right" : "left"}
          threshold={0.22}
          className={reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}
        >
          
          {/* CLICKABLE TITLE */}
          <Link 
            to={linkPath || "/services"} 
            className="text-3xl md:text-4xl mb-4 inline-block hover:text-[#2BD7D7] transition-colors cursor-pointer"
          >
            {title}
          </Link>

          <p className="text-gray-400 text-sm mb-6 max-w-md">
            {description}
          </p>

          {/* LIST */}
          <div className="space-y-4">
            {points.map((item, index) => (
              <Link
                key={index}
                to={item.path || "/services"}
                className="flex justify-between items-center border-b border-white/20 pb-2 hover:text-cyan-400 transition-colors group"
              >
                <span className="text-sm">{item.name}</span>

                {/* Arrow Icon */}
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* IMAGE */}
        <ScrollReveal
          variant={reverse ? "left" : "right"}
          delay={140}
          threshold={0.22}
          className={reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"}
        >
          <div className="rounded-2xl overflow-hidden ">
            <img
              src={image}
              alt="career"
            className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain"
            />
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
};

export default CareerSection;
