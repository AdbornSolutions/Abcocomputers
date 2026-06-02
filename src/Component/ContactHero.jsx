import React from "react";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

const ContactHero = () => {
  return (
 <section className="w-full px-6 md:px-12 py-20 pt-28 md:pt-32 
bg-[#060B14] relative text-white overflow-hidden">

      {/* 🔥 TOP GLOW (MAIN ELLIPSE) */}
   {/* CENTER SOFT GLOW */}
<div className="absolute top-[-250px] left-1/2 -translate-x-1/2 
w-[360px] h-[360px] md:w-[700px] md:h-[700px] rounded-full 
bg-cyan-400/30 blur-[110px] pointer-events-none"></div>
      {/* TOP CONTENT */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        
        <button className="px-5 py-2 rounded-full 
        bg-white/10 backdrop-blur-md border border-white/20 text-sm mb-5">
          Contact Our Team
        </button>

        <h2 className="text-[26px] md:text-[38px] font-semibold mb-4 mt-5">
          Let’s Build <span className="text-cyan-400">Something</span> Together
        </h2>

        <p className="text-white/70 text-sm md:text-base mt-5">
          Get in touch with our global teams to accelerate your digital transformation.
          Whether you’re a startup or an enterprise, we’re here to help you scale your vision with precision.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT FORM */}
        <div className="p-6 md:p-8 rounded-2xl 
        bg-gradient-to-br from-white/10 to-transparent 
        border border-white/10 backdrop-blur-lg shadow-lg">

          <h3 className="text  mb-6">
            Book Your Consultation
          </h3>

          {/* INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            
            <input
              placeholder="John Doe"
              className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm outline-none placeholder-white/50"
            />

            <input
              placeholder="john@company.com"
              className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm outline-none placeholder-white/50"
            />
          </div>

          <select className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm mb-4 text-white/70">
            <option className="text-black">Subject</option>
          </select>

          <textarea
            rows="4"
            placeholder="How can we help you?"
            className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm mb-5 outline-none placeholder-white/50"
          />

          <button className="w-full py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
            Submit Request →
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">

          {/* CARD */}
          {[ 
            {
              title: "Head Office (US)",
              desc: "123 Innovation Drive, Suite 500, San Francisco, CA 94105",
            },
            {
              title: "India Office (Nagpur)",
              desc: "Plot No. 47, 3rd Floor, Kotwal Nagar, Khamla, Laxmi Nagar , Nagpur, Maharashtra, India, 440022",
            },
            {
              title: "India Office (Nizamabad)",
              desc: "V-Hub Business Tower, Nizamabad, Telangana 503001",
            },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl flex gap-4 items-start 
            bg-gradient-to-r from-white/10 to-transparent 
            border border-white/10 backdrop-blur-lg">

              <div className="bg-white/10 p-2 rounded-lg">
                <Building2 size={18} />
              </div>

             <div>
  <h4 className="text-[16px] mb-2">
    {item.title}
  </h4>

  <div className="flex items-start gap-2">
    <MapPin size={14} className="mt-[3px] text-white/40" />

    <p className="text-white/40 text-sm leading-relaxed">
      {item.desc}
    </p>
  </div>
</div>
            </div>
          ))}

          {/* CONTACT BOX */}
          <div className="p-5 rounded-xl space-y-3 text-sm 
          bg-gradient-to-r from-white/10 to-transparent 
          border border-white/10 backdrop-blur-lg">

            <div className="flex items-center gap-3">
              <Phone size={16} />
              <span>+1 870 2102450 , </span>
              <span>+91 9000000000 </span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} />
              <span className="break-all">hr-manager@abcocomputers.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-1" />
              <span>
                Plot No. 47, 3rd Floor, Kotwal Nagar, Khamla, Laxmi Nagar , Nagpur, Maharashtra, India, 440022
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactHero;
