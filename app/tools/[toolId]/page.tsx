"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Palette, BrainCircuit, Tv, Music, Layers, PenLine,
  Briefcase, Package, Star, Youtube, Sparkles,
  ArrowLeft, CheckCircle2, KeyRound, ChevronRight,
  Clapperboard, Film, Mic, Bot, Feather,
  Paintbrush, Wand2, Video, Scissors, BarChart2,
  TrendingUp, Mail, Search, Zap, Headphones,
} from "lucide-react";
import { getToolById } from "../../data/tools";
import { use } from "react";

const iconMap: Record<string, React.ElementType> = {
  Palette, BrainCircuit, Tv, Music, Layers, PenLine,
  Briefcase, Package, Star, Youtube,
  Clapperboard, Film, Mic, Bot, Feather,
  Paintbrush, Wand2, Video, Scissors, BarChart2,
  TrendingUp, Mail, Search, Zap, Headphones,
};

export default function ToolPage({
  params,
}: {
  params: Promise<{ toolId: string }>;
}) {
  const { toolId } = use(params);
  const tool = getToolById(toolId);

  if (!tool) notFound();

  const Icon = iconMap[tool.iconName] ?? Sparkles;
  const router = useRouter();
  const [countdown, setCountdown] = useState<number | null>(null);
  const circumference = 2 * Math.PI * 20;

  useEffect(() => {
    if (countdown === null || countdown <= 0) return;
    const id = setTimeout(() => setCountdown((c) => (c !== null ? c - 1 : null)), 1000);
    return () => clearTimeout(id);
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0) router.push(`/tools/${tool.id}/passwords`);
  }, [countdown, router, tool.id]);

  const handleClick = () => {
    if (countdown !== null) return;
    setCountdown(0);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-200 mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to All Tools
      </Link>

      {/* ─── Tool Header ─── */}
      <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#111118] p-6 sm:p-8">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-5 pointer-events-none`}
        />
        <div
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${tool.gradient} opacity-70`}
        />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.gradient} shadow-xl`}
          >
            <Icon className="h-8 w-8 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                {tool.name}
              </h1>
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${tool.badgeColor}`}
              >
                {tool.category}
              </span>
            </div>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {tool.description}
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="relative mt-6 grid grid-cols-3 gap-3 rounded-xl border border-white/6 bg-black/20 p-4">
          {[
            { label: "Credentials", value: "30" },
            { label: "Success Rate", value: "97%" },
            { label: "Last Updated", value: "Today" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-lg font-bold text-white">{s.value}</div>
              <div className="text-xs text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Features ─── */}
      <div className="mt-6 rounded-2xl border border-white/8 bg-[#111118] p-6">
        <h2 className="mb-4 text-base font-semibold text-white">
          What&#39;s Included
        </h2>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {tool.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-400">
              <CheckCircle2
                className={`mt-0.5 h-4 w-4 shrink-0 bg-gradient-to-br ${tool.gradient} rounded-full`}
                style={{ color: "rgba(255,255,255,0.9)", padding: "1px" }}
              />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* ─── CTA to Passwords Page ─── */}
      <div className="mt-6 rounded-2xl border border-white/8 bg-[#111118] p-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.gradient} shadow-xl`}
          >
            <KeyRound className="h-7 w-7 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">Ready to Get Access?</h2>
          <p className="text-sm text-zinc-500 max-w-sm">
            Head to the passwords page to generate 30 free working{" "}
            {tool.name} credentials instantly.
          </p>
          <button
            onClick={handleClick}
            disabled={countdown !== null}
            className={`mt-2 inline-flex items-center gap-2.5 rounded-xl ${tool.accentColor} px-8 py-3.5 text-base font-bold text-white shadow-xl transition-all hover:shadow-2xl active:scale-[0.98] disabled:cursor-not-allowed`}
          >
            {countdown !== null && countdown > 0 ? (
              <>
                <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                  <svg className="absolute inset-0 -rotate-90" width="24" height="24" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="6" />
                    <circle
                      cx="24" cy="24" r="20"
                      fill="none" stroke="white" strokeOpacity="1" strokeWidth="6" strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference * (1 - countdown / 10)}
                      style={{ transition: "stroke-dashoffset 0.9s linear" }}
                    />
                  </svg>
                  <span className="text-[11px] font-bold z-10 leading-none">{countdown}</span>
                </span>
                Please wait…
              </>
            ) : (
              <>
                <KeyRound className="h-5 w-5" />
                Get Free Passwords
                <ChevronRight className="h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
