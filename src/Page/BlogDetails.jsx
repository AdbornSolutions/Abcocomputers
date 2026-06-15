import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, UserRound } from "lucide-react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { blogPosts } from "../data/blogData";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  const relatedPosts = blogPosts.filter((item) => item.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#060B14] text-white">
        <Navbar />
        <main className="mx-auto max-w-4xl px-4 pb-20 pt-36 text-center sm:px-6">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-100/60">
            Blog not found
          </p>
          <h1 className="mt-4 font-heading text-[36px] sm:text-[52px]">
            This insight is not available.
          </h1>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-cyan-100"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060B14] text-white">
      <Navbar />

      <main className="pb-20 pt-28">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-cyan-100/70 transition hover:text-cyan-100"
          >
            <ArrowLeft size={16} /> Back to all blogs
          </Link>

          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-cyan-100 backdrop-blur-xl">
                {post.category}
              </span>
              <h1 className="mt-6 font-heading text-[34px] leading-tight sm:text-[50px] md:text-[62px]">
                {post.title}
              </h1>
              <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-gray-300 sm:text-[17px]">
                {post.excerpt}
              </p>
            </div>

            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <UserRound size={16} className="text-cyan-200" />
                {post.author}
              </div>
              <div className="flex items-center gap-3">
                <CalendarDays size={16} className="text-cyan-200" />
                {post.date}
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-cyan-200" />
                {post.readTime}
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10">
            <img
              src={post.image}
              alt={post.title}
              className="h-[280px] w-full object-cover sm:h-[430px] lg:h-[520px]"
            />
          </div>
        </section>

        <section className="mx-auto mt-14 grid max-w-6xl gap-10 px-4 sm:px-6 md:px-10 lg:grid-cols-[0.72fr_0.28fr]">
          <article className="space-y-6 text-[15px] leading-8 text-gray-300 sm:text-[17px]">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <aside className="h-fit rounded-2xl border border-white/10 bg-[#0b1220] p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-100/60">
              Key Takeaways
            </p>
            <div className="mt-5 space-y-3">
              {post.takeaways.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 md:px-10">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-100/60">
                More Insights
              </p>
              <h2 className="mt-2 font-heading text-[30px] sm:text-[40px]">
                Keep reading
              </h2>
            </div>
            <Link to="/blog" className="text-sm text-cyan-100/70 hover:text-cyan-100">
              View all blogs
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {relatedPosts.map((item) => (
              <Link
                key={item.slug}
                to={`/blog/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/60">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-[18px] font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-100/70">
                    Read more <ArrowRight size={14} />
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

export default BlogDetails;
