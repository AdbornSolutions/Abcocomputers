import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  FolderCheck,
  GraduationCap,
  Mail,
  ShieldCheck,
} from "lucide-react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const heroImg =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1300&q=80";

const documentationServices = [
  {
    icon: <GraduationCap size={20} />,
    title: "Student documentation",
    text: "Guidance for academic records, application files, SOP inputs, financial documents, and visa support paperwork.",
  },
  {
    icon: <FileCheck2 size={20} />,
    title: "Career documentation",
    text: "Resume, LinkedIn, project proof, experience details, and role-focused profile preparation for IT opportunities.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Immigration support files",
    text: "Organized document review for F1, H1B, Green Card, and related process readiness.",
  },
];

const universityDocuments = [
  "Passport",
  "SSC - Secondary School Certificate",
  "Intermediate Memorandum of marks or Diploma",
  "Official university transcripts and proof of bachelor's degree completion",
  "A detailed resume including all experiences",
  "Three letters of recommendation - LOR from your professors or employers",
  "The Statement of Purpose - SOP must include applicant background, goals, and reasons for pursuing their Master in USA",
  "English Proficiency Test - IELTS, TOEFL, DET, and PTE",
  "GRE if attempted, or GMAT Graduate Management Admission Test score",
  "Financial documents, company will provide if you are in a fully funded program",
  "Create a new email id and share the details with us",
];

const collegeColumns = [
  [
    "Indiana Wesleyan University",
    "Campbellsville University",
    "Lindsey Wilson College",
    "Harrisburg University of Science and Technology",
    "New England College",
    "Trine University | Angola, IN",
    "University of Cumberlands",
    "Roosevelt University",
    "Vanderbilt University",
    "New Jersey Institute of Technology",
    "Monroe College",
    "Wayne State University",
    "Globe University",
    "Westcliff University",
    "Lindenwood University",
    "Wichita State University",
    "Lewis University Romeoville",
    "Saint Peters University",
    "Fresno Pacific University",
    "Loyola University",
    "University of Louisville",
  ],
  [
    "Knowledge Systems Institute",
    "Sullivan University",
    "Infoserve Technologies Institute",
    "International Technological University",
    "Virginia International University",
    "University of North America",
    "Stratford University",
    "Union College, Kentucky",
    "United States University",
    "Georgia State University",
    "Devry University Downers Grove",
    "Notre Dame de Namur University",
    "Goldey-Beacom College",
    "Hamline University",
    "University of Virginia",
    "Ottawa University",
    "Coleman University",
    "American National University",
    "Everest University",
    "University of Fairfax",
    "Lindenwood University",
    "Wichita State University",
  ],
];

const processSteps = [
  {
    title: "Document collection",
    text: "We identify required files based on the candidate journey and collect the right details first.",
  },
  {
    title: "Accuracy review",
    text: "Every document is checked for missing information, formatting issues, and process readiness.",
  },
  {
    title: "Submission preparation",
    text: "Files are organized into a clear sequence so candidates can move ahead with confidence.",
  },
];

const Documentation = () => {
  return (
    <div className="min-h-screen bg-[#060B14] text-white">
      <Navbar />

      <main className="px-4 pb-20 pt-32 sm:px-6 md:px-10">
        <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-cyan-100 backdrop-blur-xl premium-glass">
              Contact / Documentation
            </span>

            <h1 className="mt-6 font-heading text-[36px] leading-tight sm:text-[52px] md:text-[64px]">
              Documentation support
              <span className="block bg-[linear-gradient(95deg,_#FFFFFF_0.2%,_#2BD7D7_58%)] bg-clip-text text-transparent">
                without confusion.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-300 sm:text-[17px]">
              ABCO Computers helps candidates prepare, review, and organize
              important documents for study, visa, career, placement, and
              onboarding processes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contactus"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-100"
              >
                Contact documentation team <ArrowRight size={16} />
              </Link>
              <a
                href="mailto:hr-manager@abcocomputers.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-md transition hover:bg-white/15"
              >
                Email us <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[36px] bg-cyan-300/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-3">
              <img
                src={heroImg}
                alt="Documentation review"
                className="h-[360px] w-full rounded-[24px] object-cover sm:h-[460px]"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/15 bg-[#060B14]/80 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cyan-300/15 text-cyan-100">
                    <ClipboardCheck size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Review-ready files</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-300">
                      Organized document guidance for smoother applications,
                      visa steps, onboarding, and career processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
          {documentationServices.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-white/10 bg-[#0b1220] p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-cyan-200">
                  {item.icon}
                </div>
                <span className="text-sm text-cyan-100/50">0{index + 1}</span>
              </div>
              <h2 className="text-[22px] font-semibold">{item.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {item.text}
              </p>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-10">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-cyan-200">
              <FolderCheck size={20} />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/60">
              University application documents
            </p>
            <h2 className="mt-3 font-heading text-[28px] sm:text-[38px]">
              Documents required to apply for the universities.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Keep these documents ready before starting the university
              application process. Our documentation team can help review,
              organize, and prepare the files for the next step.
            </p>
          </div>

          <div className="grid gap-3">
            {universityDocuments.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0b1220] p-4 text-sm text-gray-300"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-200"
                />
                <span>
                  <span className="text-white">0{index + 1}.</span> {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:p-10">
          <div className="rounded-3xl border border-red-400/20 bg-red-500/10 px-5 py-4 text-center text-[18px] font-semibold leading-relaxed text-red-200 sm:text-[24px]">
            Note: The student should collect and carry at least 3 sets of
            Transcripts & LORs to USA.
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/60">
              Partner colleges
            </p>
            <h2 className="mt-3 font-heading text-[26px] sm:text-[36px]">
              The list of colleges enlisted with our organization.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {collegeColumns.map((column, columnIndex) => (
              <ul
                key={columnIndex}
                className="rounded-[24px] border border-white/10 bg-[#0b1220] p-5 sm:p-6"
              >
                {column.map((college) => (
                  <li
                    key={`${columnIndex}-${college}`}
                    className="flex items-start gap-3 border-b border-white/5 py-2.5 text-sm leading-relaxed text-gray-300 last:border-b-0"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                    <span>{college}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/60">
              How it works
            </p>
            <h2 className="mt-3 font-heading text-[28px] sm:text-[40px]">
              A simple review flow for cleaner submissions.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[24px] border border-white/10 bg-[#0b1220] p-6 transition duration-500 hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cyan-200">
                  <FileText size={20} />
                </div>
                <p className="mb-2 text-xs text-cyan-100/60">Step 0{index + 1}</p>
                <h3 className="text-[21px] font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 rounded-[28px] border border-white/10 bg-[#0b1220] p-6 text-center sm:p-10 md:max-w-6xl">
          <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-cyan-200">
            <BadgeCheck size={20} />
          </div>
          <h2 className="mx-auto max-w-3xl font-heading text-[28px] sm:text-[40px]">
            Need help checking your documents?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-[16px]">
            Contact ABCO Computers and share your requirement. Our team can
            guide you on what to prepare, what to review, and what to organize
            before moving ahead.
          </p>
          <Link
            to="/contactus"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-100"
          >
            Contact us <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
