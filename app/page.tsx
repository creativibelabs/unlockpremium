import { tools } from "./data/tools";
import ToolCard from "./components/ToolCard";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, RefreshCcw, Star } from "lucide-react";

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
            Updated Daily — New Accounts Added
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
            The ultimate directory for free premium accounts. Get instant access
            to Canva Pro, ChatGPT Plus, Netflix, Spotify, Adobe CC, and more —
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
            Choose any tool below and generate free working credentials instantly.
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
              Why theeliteaccess?
            </h2>
            <p className="mt-3 text-zinc-500">
              Everything you need to access premium software without paying.
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


    </>
  );
}
