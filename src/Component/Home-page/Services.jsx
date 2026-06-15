import React from "react";
import ScrollReveal from "../Common/ScrollReveal";
import PixelTransition from "../PixelTransition";

import careerInUsaImg from "../../assets/Cards/career-in-usa.png";
import jobInUsaImg from "../../assets/Cards/job-in-usa.png";
import masterInUsaImg from "../../assets/Cards/master-in-usa.png";
import greenCardImg from "../../assets/Cards/green-card.png";
import h1bVisaImg from "../../assets/Cards/h1b-visa.png";
import f1VisaImg from "../../assets/Cards/f1-visa.png";

const cardImages = [
  careerInUsaImg,
  jobInUsaImg,
  masterInUsaImg,
  greenCardImg,
  h1bVisaImg,
  f1VisaImg,
];

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
            <ScrollReveal key={index} delay={index * 90} className="h-full">
              <PixelTransition
                firstContent={
                  <img
                    src={cardImages[index % cardImages.length]}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                }
                secondContent={
                  <div className="flex h-full w-full flex-col justify-center bg-[#111] p-6 text-white">
                    {item.icon && (
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                        <img
                          src={item.icon}
                          alt=""
                          className="h-9 w-9 object-contain opacity-80"
                        />
                      </div>
                    )}

                    {item.title && (
                      <h3 className="mb-3 font-heading text-[25px] leading-tight">
                        {item.title}
                      </h3>
                    )}

                    {item.desc && (
                      <p className="font-body text-[14px] leading-[1.6] text-gray-300">
                        {item.desc}
                      </p>
                    )}
                  </div>
                }
                gridSize={9}
                pixelColor="#ffffff"
                once={false}
                animationStepDuration={0.3}
                aspectRatio="75%"
                className="custom-pixel-card lift-card"
                style={{ width: "100%" }}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
