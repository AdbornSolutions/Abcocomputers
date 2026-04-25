import React from "react";

const OurPurpose = () => {
  return (
    <section className="bg-[#020617] text-white py-16 px-4 md:px-20">

      <div className="text-center mb-10">
        <span className="px-4 py-1 rounded-full bg-white/10 text-sm">
          Our Purpose & Principles
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* VALUE */}
        <div className="bg-[#0b1220] p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-3">Our Value</h3>
          <p className="text-gray-400 text-sm">
            Integrity, collaboration, and respect are the foundation of everything we do.
          </p>
        </div>

        {/* VISION */}
        <div className="bg-[#0b1220] p-6 rounded-xl border border-white/10">
          <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-400 text-sm">
            To create a world where talent meets opportunity and innovation thrives.
          </p>
        </div>

        {/* MISSION */}
        <div className="bg-[#0b1220] p-6 rounded-xl border border-white/10 md:col-span-2">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-400 text-sm">
            Empower individuals and businesses through innovative IT solutions and talent development.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurPurpose;