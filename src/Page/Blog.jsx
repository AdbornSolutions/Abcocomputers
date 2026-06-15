import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock, FileText } from "lucide-react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { blogPosts } from "../data/blogData";

const categories = ["Career Growth", "Visa Guidance", "Learning", "Placement Prep"];

const Blog = () => {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <div className="min-h-screen bg-[#060B14] text-white">
      <Navbar />

      <main className="px-4 pb-20 pt-32 sm:px-6 md:px-10">
        <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-cyan-100 backdrop-blur-xl premium-glass">
              Insights / Blog
            </span>

            <h1 className="mt-6 font-heading text-[36px] leading-tight sm:text-[52px] md:text-[64px]">
              Practical insights for
              <span className="block bg-[linear-gradient(95deg,_#FFFFFF_0.2%,_#2BD7D7_58%)] bg-clip-text text-transparent">
                smarter career moves.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-300 sm:text-[17px]">
              Explore ABCO blogs on USA IT career planning, visa guidance,
              project-based training, profile building, and placement readiness.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-cyan-100/80"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl shadow-cyan-950/20 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40"
          >
            <div className="relative h-[260px] overflow-hidden sm:h-[340px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/20 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-medium text-black">
                Featured
              </span>
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex flex-wrap gap-4 text-xs text-cyan-100/70">
                <span className="inline-flex items-center gap-2">
                  <FileText size={14} /> {featuredPost.category}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock size={14} /> {featuredPost.readTime}
                </span>
              </div>
              <h2 className="mt-4 text-[26px] font-semibold leading-tight sm:text-[32px]">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {featuredPost.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-100 transition group-hover:text-white">
                Read featured insight <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </section>

        <section className="mx-auto mt-16 max-w-6xl">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-100/60">
                Latest Articles
              </p>
              <h2 className="mt-2 font-heading text-[30px] sm:text-[40px]">
                Guidance candidates can act on
              </h2>
            </div>
            <Link
              to="/contactus"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm transition hover:bg-white/15"
            >
              Contact us <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06]"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 text-xs text-cyan-100/60">
                    <span>{post.category}</span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays size={13} /> {post.date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[22px] font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-100/70 transition group-hover:text-white">
                    Read more <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
