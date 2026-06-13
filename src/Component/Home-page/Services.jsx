import React from "react";
import ScrollReveal from "../Common/ScrollReveal";

const Services = ({
  title = "Services",
  heading,
  servicesData = [],
  columns = "lg:grid-cols-3",
}) => {
  return (
    <section className="w-full bg-[#060B14] py-16 px-4 flex justify-center">
      <div className="w-full max-w-6xl">
        <ScrollReveal className="text-center mb-10">
          {title && (
            <span
              className="inline-block px-5 py-2 mb-6 rounded-full 
              bg-white/10 backdrop-blur-md border border-white/20 
              text-gray-300 text-sm shadow-sm premium-glass"
            >
              {title}
            </span>
          )}

          {heading && (
            <h2 className="mt-4 font-heading text-[32px] md:text-[36px] text-white">
              {heading}
            </h2>
          )}
        </ScrollReveal>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6`}>
          {servicesData.map((item, index) => (
            <ScrollReveal
              key={index}
              delay={index * 90}
              className="h-full"
            >
              <div
                className="h-full bg-white/5 backdrop-blur-md 
                border border-white/10 
                rounded-xl p-6 
                text-white 
                hover:bg-white/10 
                lift-card"
              >
                {item.icon && (
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-9 h-9 object-contain opacity-80"
                    />
                  </div>
                )}

                {item.title && (
                  <h3 className="font-heading text-[25px] mb-2">
                    {item.title}
                  </h3>
                )}

                {item.desc && (
                  <p className="text-gray-400 text-[14px] leading-[1.6] font-body">
                    {item.desc}
                  </p>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    className="inline-block mt-4 text-sm text-blue-400 hover:underline"
                  >
                    Learn More →
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
