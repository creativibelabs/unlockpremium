"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Palette, BrainCircuit, Tv, Music, Layers, PenLine,
  Briefcase, Package, Star, Youtube, ArrowRight, Sparkles,
  Clapperboard, Film, Mic, Bot, Feather,
  Paintbrush, Wand2, Video, Scissors, BarChart2,
  TrendingUp, Mail, Search, Zap, Headphones,
} from "lucide-react";
import type { Tool } from "../data/tools";

const iconMap: Record<string, React.ElementType> = {
  Palette, BrainCircuit, Tv, Music, Layers, PenLine,
  Briefcase, Package, Star, Youtube,
  Clapperboard, Film, Mic, Bot, Feather,
  Paintbrush, Wand2, Video, Scissors, BarChart2,
  TrendingUp, Mail, Search, Zap, Headphones,
};

interface ToolCardProps {
  tool: Tool;
  index: number;
}

export default function ToolCard({ tool, index }: ToolCardProps) {
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
    if (countdown === 0) router.push(`/tools/${tool.id}`);
  }, [countdown, router, tool.id]);

  const handleClick = () => {
    if (countdown !== null) return;
    setCountdown(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#111118] shadow-xl"
    >
      {/* Gradient top border glow */}
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${tool.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
      />

      {/* Card body */}
      <div className="flex flex-1 flex-col p-6">
        {/* Icon + badge */}
        <div className="flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tool.gradient} shadow-lg`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${tool.badgeColor}`}
          >
            {tool.category}
          </span>
        </div>

        {/* Name & tagline */}
        <div className="mt-4">
          <h3 className="text-base font-semibold text-white">{tool.name}</h3>
          <p className="mt-1 text-sm text-zinc-400">{tool.tagline}</p>
        </div>

        {/* Feature preview */}
        <ul className="mt-4 flex-1 space-y-1.5">
          {tool.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-zinc-500">
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${tool.gradient}`}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={handleClick}
          disabled={countdown !== null}
          className={`mt-6 flex items-center justify-center gap-2 rounded-xl ${tool.accentColor} px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95 disabled:cursor-not-allowed`}
        >
          {countdown !== null && countdown > 0 ? (
            <>
              <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                <svg className="absolute inset-0 -rotate-90" width="20" height="20" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="6" />
                  <circle
                    cx="24" cy="24" r="20"
                    fill="none" stroke="white" strokeOpacity="1" strokeWidth="6" strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - countdown / 10)}
                    style={{ transition: "stroke-dashoffset 0.9s linear" }}
                  />
                </svg>
                <span className="text-[9px] font-bold z-10 leading-none">{countdown}</span>
              </span>
              Please wait…
            </>
          ) : (
            <>
              Claim Access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
