import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogs } from "../data/blogs";

export const metadata: Metadata = {
  title: "Blog — Free Premium Tool Guides & Tips | TheEliteAccess",
  description:
    "Read in-depth guides on how to access ChatGPT Plus, Canva Pro, Grammarly, and more for free. TheEliteAccess blog covers tips, tutorials, and the best free premium tool strategies.",
  openGraph: {
    title: "Blog | TheEliteAccess",
    description:
      "In-depth guides on getting free access to the world's best premium AI and productivity tools.",
    type: "website",
  },
};

export default function BlogListPage() {
  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 mb-5">
          <Tag className="h-3.5 w-3.5" />
          TheEliteAccess Blog
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Guides, Tips &amp; Deep-Dives
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400 text-base">
          Everything you need to know about accessing premium tools for free — written by
          the team behind TheEliteAccess.
        </p>
      </div>

      {/* Featured Post */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group relative mb-14 flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-[#111118] transition-all hover:border-violet-500/30 sm:flex-row"
      >
        {/* Featured image / gradient */}
        <div className="relative w-full shrink-0 overflow-hidden sm:w-72 lg:w-96 h-52 sm:h-auto">
          {featured.coverImage ? (
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className={`absolute inset-0 bg-linear-to-br ${featured.coverGradient} opacity-80`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-black text-white/20 select-none tracking-tighter">
                  {featured.category}
                </span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#111118] hidden sm:block" />
        </div>
        <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
              Featured
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
              {featured.category}
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-white leading-snug group-hover:text-violet-300 transition-colors sm:text-3xl">
            {featured.title}
          </h2>
          <p className="text-zinc-400 text-sm leading-7 max-w-2xl">{featured.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {featured.readTime}
            </span>
            <span>{featured.date}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 group-hover:gap-2.5 transition-all">
            Read Full Article <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>

      {/* Rest of Posts */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group flex flex-col rounded-2xl border border-white/8 bg-[#111118] overflow-hidden transition-all hover:border-violet-500/30 hover:bg-[#16161f]"
          >
            {/* Card thumbnail */}
            <div className="relative h-44 w-full overflow-hidden shrink-0">
              {blog.coverImage ? (
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-linear-to-br ${blog.coverGradient} opacity-75`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-black text-white/20 select-none tracking-tighter">
                      {blog.category}
                    </span>
                  </div>
                </div>
              )}
              <span className="absolute top-3 left-3 rounded-full border border-violet-500/30 bg-[#111118]/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-violet-300">
                {blog.category}
              </span>
            </div>
            {/* Card body */}
            <div className="flex flex-col flex-1 p-5">
              <h2 className="text-base font-bold text-white leading-snug group-hover:text-violet-300 transition-colors line-clamp-2 flex-1">
                {blog.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-500 line-clamp-2 leading-6">
                {blog.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-600 border-t border-white/5 pt-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {blog.readTime}
                </span>
                <span className="flex items-center gap-1 text-violet-400 font-semibold">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
