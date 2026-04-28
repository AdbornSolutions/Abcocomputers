import React from "react";

const CareerSection = ({ title, description, points, image, reverse }) => {
  return (
    <section className="text-white py-16 px-6 md:px-12 lg:px-20">
      
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* CONTENT */}
        <div className={reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
          
          <h2 className="text-3xl md:text-4xl  mb-4">
            {title}
          </h2>

          <p className="text-gray-400 text-sm mb-6 max-w-md">
            {description}
          </p>

          {/* LIST */}
          <div className="space-y-4">
            {points.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-white/20 pb-2 cursor-pointer hover:text-cyan-400 transition"
              >
                <span className="text-sm">{item.name}</span>

                {/* 👉 Future Link Path */}
                <span className="text-lg">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className={reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
          <div className="rounded-2xl overflow-hidden ">
            <img
              src={image}
              alt="career"
            className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default CareerSection;