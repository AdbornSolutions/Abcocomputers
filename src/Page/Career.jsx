import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FileUp,
  GraduationCap,
  Layers3,
  Mail,
  MessageCircle,
  Phone,
  Rocket,
  Send,
  Target,
  UsersRound,
} from "lucide-react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const heroImg =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1300&q=80";
const mentorImg =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80";

const careerTracks = [
  {
    icon: <GraduationCap size={20} />,
    title: "Students & freshers",
    text: "Build the right technical foundation, profile story, and USA career direction from the start.",
  },
  {
    icon: <BriefcaseBusiness size={20} />,
    title: "Working professionals",
    text: "Upgrade your skills, reposition your experience, and prepare for stronger IT opportunities.",
  },
  {
    icon: <UsersRound size={20} />,
    title: "Career switchers",
    text: "Move into IT with structured learning, practical projects, communication practice, and mentoring.",
  },
];

const pathwaySteps = [
  "Career discovery and role mapping",
  "Skill-gap analysis with a practical learning plan",
  "Resume, LinkedIn, and project portfolio preparation",
  "Interview, communication, and placement readiness",
  "Guidance for long-term USA career growth",
];

const openRoles = [
  {
    title: "Java Developer",
    type: "Full-time",
    experience: "5 - 10 Years",
    summary:
      "Build scalable backend services, APIs, and enterprise Java applications with clean engineering practices.",
  },
  {
    title: "Recruiter",
    type: "Full-time",
    experience: "5 - 10 Years",
    summary:
      "Manage sourcing, screening, candidate coordination, and hiring support for IT roles.",
  },
  {
    title: "UI Developer",
    type: "Full-time",
    experience: "5 - 10 Years",
    summary:
      "Create responsive, polished interfaces using modern frontend patterns and strong UI execution.",
  },
  {
    title: "Dot Net Developer",
    type: "Full-time",
    experience: "5 - 10 Years",
    summary:
      "Develop secure .NET applications, integrations, and business systems with maintainable code.",
  },
];

const supportCards = [
  {
    icon: <Target size={18} />,
    title: "Role clarity",
    text: "Understand which IT roles match your background, goals, and learning speed.",
  },
  {
    icon: <Layers3 size={18} />,
    title: "Structured roadmap",
    text: "Follow a clear path across training, profile building, and interview preparation.",
  },
  {
    icon: <MessageCircle size={18} />,
    title: "Mentor feedback",
    text: "Improve your answers, communication, and confidence with guided review sessions.",
  },
  {
    icon: <BadgeCheck size={18} />,
    title: "Outcome focus",
    text: "Prepare for the practical expectations of recruiters, employers, and USA IT teams.",
  },
];

const Career = () => {
  const fieldClass =
    "w-full rounded-2xl border border-white/10 bg-[#060B14]/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-300/60 focus:bg-[#08111f]";

  return (
    <div className="min-h-screen bg-[#060B14] text-white">
      <Navbar />

      <main className="px-4 pb-20 pt-32 sm:px-6 md:px-10">
        <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-cyan-100 backdrop-blur-xl premium-glass">
              Insights / Career
            </span>

            <h1 className="mt-6 font-heading text-[36px] leading-tight sm:text-[52px] md:text-[64px]">
              Build a career path
              <span className="block bg-[linear-gradient(95deg,_#FFFFFF_0.2%,_#2BD7D7_58%)] bg-clip-text text-transparent">
                with real direction.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-300 sm:text-[17px]">
              ABCO Computers helps students, graduates, and professionals plan
              a clear IT career journey with technical training, profile
              preparation, interview support, and USA-focused growth guidance.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply-form"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-100"
              >
                Apply now <ArrowRight size={16} />
              </a>
              <Link
                to="/services"
                className="inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-md transition hover:bg-white/15"
              >
                Explore services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[36px] bg-cyan-300/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-3">
              <img
                src={heroImg}
                alt="Career planning discussion"
                className="h-[360px] w-full rounded-[24px] object-cover sm:h-[460px]"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/15 bg-[#060B14]/80 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cyan-300/15 text-cyan-100">
                    <Rocket size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">USA IT pathway</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-300">
                      Training, mentoring, placement readiness, and long-term
                      career strategy in one guided journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
          {careerTracks.map((track, index) => (
            <article
              key={track.title}
              className="rounded-[24px] border border-white/10 bg-[#0b1220] p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-cyan-200">
                  {track.icon}
                </div>
                <span className="text-sm text-cyan-100/50">0{index + 1}</span>
              </div>
              <h2 className="text-[22px] font-semibold">{track.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {track.text}
              </p>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-16 max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/60">
                Current openings
              </p>
              <h2 className="mt-3 font-heading text-[28px] sm:text-[40px]">
                Open roles for experienced professionals.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
                We are hiring for technology and recruitment roles with 5 - 10
                years of experience.
              </p>
            </div>
            <a
              href="#apply-form"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white transition hover:bg-white/15"
            >
              Apply for a role <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {openRoles.map((role, index) => (
              <article
                key={role.title}
                className="rounded-[24px] border border-white/10 bg-[#0b1220] p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cyan-300/15 text-cyan-100">
                    <BriefcaseBusiness size={20} />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-cyan-100/80">
                    Opening 0{index + 1}
                  </span>
                </div>
                <h3 className="text-[22px] font-semibold">{role.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {role.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                    <Clock3 size={14} className="text-cyan-200" />
                    {role.experience}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                    <BadgeCheck size={14} className="text-cyan-200" />
                    {role.type}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="apply-form"
          className="mx-auto mt-16 grid max-w-6xl scroll-mt-28 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
        >
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/60">
              Apply now
            </p>
            <h2 className="mt-3 font-heading text-[28px] sm:text-[38px]">
              Share your profile with ABCO.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Fill the application form and select the role you want to apply
              for. Our team can review your details and contact you for the next
              step.
            </p>

            <div className="mt-7 grid gap-3 text-sm text-gray-300">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1220] p-4">
                <Mail size={18} className="text-cyan-200" />
                careers@abcocomputers.com
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1220] p-4">
                <Phone size={18} className="text-cyan-200" />
                Response from recruitment team after profile review
              </div>
            </div>
          </div>

          <form className="rounded-[28px] border border-white/10 bg-[#0b1220] p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                className={fieldClass}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className={fieldClass}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className={fieldClass}
                required
              />
              <select name="role" className={fieldClass} defaultValue="" required>
                <option value="" disabled>
                  Select role
                </option>
                {openRoles.map((role) => (
                  <option key={role.title} value={role.title}>
                    {role.title}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="experience"
                placeholder="Experience, e.g. 7 years"
                className={fieldClass}
                required
              />
              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-white/15 bg-[#060B14]/80 px-4 py-3 text-sm text-gray-300 transition hover:border-cyan-300/50">
                <FileUp size={18} className="text-cyan-200" />
                <span>Upload resume</span>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                />
              </label>
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your current role, skills, and availability"
              className={`${fieldClass} mt-4 resize-none`}
            />

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-100 sm:w-auto"
            >
              Submit application <Send size={16} />
            </button>
          </form>
        </section>

        <section className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[28px] border border-white/10">
            <img
              src={mentorImg}
              alt="Career mentoring session"
              className="h-[320px] w-full object-cover sm:h-[430px]"
            />
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/60">
              Career pathway
            </p>
            <h2 className="mt-3 font-heading text-[28px] sm:text-[38px]">
              A practical roadmap from confusion to confidence.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              The career page gives candidates a simple view of how ABCO turns
              ambition into action through assessment, learning, mentoring, and
              readiness support.
            </p>

            <div className="mt-7 grid gap-3">
              {pathwaySteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0b1220] p-4 text-sm text-gray-300"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-cyan-200"
                  />
                  <span>
                    <span className="text-white">0{index + 1}.</span> {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/60">
                What candidates get
              </p>
              <h2 className="mt-3 font-heading text-[28px] sm:text-[40px]">
                Support that connects learning with outcomes.
              </h2>
            </div>
            <Link
              to="/it-career"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white transition hover:bg-white/15"
            >
              View IT career service <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportCards.map((card) => (
              <article
                key={card.title}
                className="min-h-[210px] rounded-2xl border border-white/10 bg-[#0b1220] p-5 transition duration-500 hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-cyan-200">
                  {card.icon}
                </div>
                <h3 className="text-[19px] font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Career;
