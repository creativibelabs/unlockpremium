import { tools } from "./data/tools";
import ToolCard from "./components/ToolCard";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap, RefreshCcw, Star, BookOpen } from "lucide-react";
import { blogs } from "./data/blogs";

export default function HomePage() {
  const stats = [
    { label: "Premium Tools", value: "10+" },
    { label: "Credentials Listed", value: "250+" },
    { label: "Daily Visitors", value: "12K+" },
    { label: "Uptime", value: "99.9%" },
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Access",
      desc: "No sign-up required. Click, generate, and use credentials immediately.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Tested",
      desc: "All listed accounts are verified and refreshed regularly for accuracy.",
    },
    {
      icon: RefreshCcw,
      title: "Always Updated",
      desc: "Credential lists are refreshed daily so you always get working accounts.",
    },
    {
      icon: Star,
      title: "Premium Quality",
      desc: "Access only the top-tier premium plans — no basic or downgraded tiers.",
    },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-purple-700/10 blur-[100px] pointer-events-none" />
        <div className="absolute top-10 -right-20 h-72 w-72 rounded-full bg-blue-700/8 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 text-center sm:px-6 lg:px-8 lg:pt-28 lg:pb-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            TheEliteAccess — Updated Daily With New Accounts
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Access{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Premium Tools
            </span>{" "}
            for Free
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            <strong className="text-white">TheEliteAccess</strong> is your #1 destination for free premium accounts. Get instant
            access to Canva Pro, ChatGPT Plus, Netflix, Spotify, Adobe CC, and more —
            100% free, no credit card needed.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#tools"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-600/30 transition-all hover:bg-violet-500 hover:shadow-violet-500/40 active:scale-95"
            >
              Browse All Tools
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
            >
              <BookOpen className="h-5 w-5" />
              Read Our Blog
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/6 bg-white/3 px-4 py-5 text-center"
              >
                <div className="text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-zinc-500 sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tools Grid ─── */}
      <section
        id="tools"
        className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            All Available Tools
          </h2>
          <p className="mt-3 text-base text-zinc-500">
            Choose any tool below and generate free working credentials instantly with TheEliteAccess.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {tools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>
      </section>

      {/* ─── Feature Highlights ─── */}
      <section className="border-t border-white/5 bg-white/2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Why Choose TheEliteAccess?
            </h2>
            <p className="mt-3 text-zinc-500">
              TheEliteAccess gives you everything you need to access premium software without paying.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-white/7 bg-[#111118] p-6 transition-colors hover:border-violet-500/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15">
                    <Icon className="h-5 w-5 text-violet-400" />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Latest Blog Posts ─── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              From the TheEliteAccess Blog
            </h2>
            <p className="mt-2 text-zinc-500 text-sm">
              Tips, guides, and deep-dives on getting premium access for free.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {blogs.slice(0, 3).map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group flex flex-col rounded-2xl border border-white/8 bg-[#111118] overflow-hidden transition-all hover:border-violet-500/30 hover:bg-[#16161f]"
            >
              {/* Thumbnail */}
              <div className="relative h-40 w-full shrink-0 overflow-hidden">
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
                      <span className="text-3xl font-black text-white/20 select-none tracking-tighter">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                )}
                <span className="absolute top-3 left-3 rounded-full border border-violet-500/30 bg-[#111118]/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-violet-300">
                  {blog.category}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-violet-300 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 line-clamp-2">{blog.excerpt}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-violet-400 font-semibold">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            View All Posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-linear-to-br from-violet-600/10 via-purple-600/5 to-transparent p-10 text-center">
          <div className="absolute inset-0 bg-linear-to-br from-violet-600/10 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />
          <div className="relative">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Ready to Unlock Premium? TheEliteAccess Has You Covered.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-zinc-400 text-sm sm:text-base">
              Join thousands of users who rely on <strong className="text-white">TheEliteAccess</strong> every day
              to get real, working premium accounts — absolutely free.
            </p>
            <Link
              href="#tools"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-violet-600/30 transition-all hover:bg-violet-500 active:scale-95"
            >
              Get Free Access Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
