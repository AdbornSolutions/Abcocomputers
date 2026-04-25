import React from "react";

const services = [
  "Career In USA",
  "Job Placement In USA",
  "Master In USA",
  "Green Card In USA",
  "H1B Visa Process",
  "F1 Visa Process",
];

const ExpertTree = () => {
  return (
    <section className="bg-[#020617] text-white py-16 px-4 md:px-20">

      <div className="text-center mb-10">
        <span className="px-4 py-1 rounded-full bg-white/10 text-sm">
          Services
        </span>
        <h2 className="text-3xl md:text-4xl mt-4">
          Our <span className="text-[#2BD7D7]">Expertise</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {services.map((item, i) => (
          <div
            key={i}
            className="bg-[#0b1220] p-5 rounded-xl border border-white/10 hover:border-[#2BD7D7]/40 transition"
          >
            <h3 className="text-lg font-semibold">{item}</h3>
            <p className="text-gray-400 text-sm mt-2">
              High-quality solutions tailored to your needs.
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ExpertTree;