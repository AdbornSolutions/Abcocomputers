import React from "react";
import { Building2, Phone, Mail, MapPin } from "lucide-react";
import Particles from "./Common/Particles";

const offices = [
  {
    title: "Head Office (US)",
    desc: "123 Innovation Drive, Suite 500, San Francisco, CA 94105",
  },
  {
    title: "India Office (Nagpur)",
    desc: "Plot No. 47, 3rd Floor, Kotwal Nagar, Khamla, Laxmi Nagar, Nagpur, Maharashtra, India, 440022",
  },
  {
    title: "India Office (Nizamabad)",
    desc: "V-Hub Business Tower, Nizamabad, Telangana 503001",
  },
];

const ContactHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#060B14] px-4 py-20 pt-28 text-white sm:px-6 md:px-12 md:pt-32">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-70">
        <Particles
          particleCount={260}
          particleSpread={12}
          speed={0.08}
          particleColors={["#ffffff", "#2BD7D7", "#7dd3fc"]}
          alphaParticles
          particleBaseSize={70}
          sizeRandomness={1.3}
          cameraDistance={18}
          disableRotation={false}
        />
      </div>

      

      <div className="relative z-10 mx-auto mb-14 max-w-3xl text-center">
        <button className="mb-5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
          Contact Our Team
        </button>

        <h2 className="mb-4 mt-5 text-[26px] font-semibold md:text-[38px]">
          Let's Build <span className="text-cyan-400">Something</span> Together
        </h2>

        <p className="mt-5 text-sm text-white/70 md:text-base">
          Get in touch with our global teams to accelerate your digital
          transformation. Whether you're a startup or an enterprise, we're here
          to help you scale your vision with precision.
        </p>
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 shadow-lg backdrop-blur-lg md:p-8">
          <h3 className="mb-6 text-xl font-semibold">Book Your Consultation</h3>

          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              placeholder="John Doe"
              className="rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm outline-none placeholder-white/50"
            />

            <input
              placeholder="john@company.com"
              className="rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm outline-none placeholder-white/50"
            />
          </div>

          <select className="mb-4 w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm text-white/70">
            <option className="text-black">Subject</option>
          </select>

          <textarea
            rows="4"
            placeholder="How can we help you?"
            className="mb-5 w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-sm outline-none placeholder-white/50"
          />

          <button className="w-full rounded-lg border border-cyan-400 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-black">
            Submit Request
          </button>
        </div>

        <div className="space-y-5">
          {offices.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-gradient-to-r from-white/10 to-transparent p-5 backdrop-blur-lg"
            >
              <div className="rounded-lg bg-white/10 p-2">
                <Building2 size={18} />
              </div>

              <div>
                <h4 className="mb-2 text-[16px]">{item.title}</h4>

                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-[3px] shrink-0 text-white/40" />

                  <p className="text-sm leading-relaxed text-white/40">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="space-y-3 rounded-xl border border-white/10 bg-gradient-to-r from-white/10 to-transparent p-5 text-sm backdrop-blur-lg">
            <div className="flex flex-wrap items-center gap-3">
              <Phone size={16} />
              <span>+1 870 2102450</span>
              <span>+91 9000000000</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} />
              <span className="break-all">hr-manager@abcocomputers.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 shrink-0" />
              <span>
                Plot No. 47, 3rd Floor, Kotwal Nagar, Khamla, Laxmi Nagar,
                Nagpur, Maharashtra, India, 440022
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
