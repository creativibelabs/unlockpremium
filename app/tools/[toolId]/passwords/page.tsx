"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  Palette, BrainCircuit, Tv, Music, Layers, PenLine,
  Briefcase, Package, Star, Youtube, Sparkles,
  ArrowLeft, Copy, Check, RefreshCcw, Eye, EyeOff,
  KeyRound, ChevronRight, Clapperboard, Film, Mic, Bot,
  Feather, Paintbrush, Wand2, Video, Scissors, BarChart2,
  TrendingUp, Mail, Search, Zap, Headphones,
} from "lucide-react";
import { getToolById, generateFakeCredentials } from "../../../data/tools";
import { use } from "react";

const iconMap: Record<string, React.ElementType> = {
  Palette, BrainCircuit, Tv, Music, Layers, PenLine,
  Briefcase, Package, Star, Youtube,
  Clapperboard, Film, Mic, Bot, Feather,
  Paintbrush, Wand2, Video, Scissors, BarChart2,
  TrendingUp, Mail, Search, Zap, Headphones,
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy to clipboard"
      className="ml-2 flex-shrink-0 rounded-md p-1 text-zinc-500 transition-colors hover:bg-white/10 hover:text-zinc-200"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

export default function PasswordsPage({
  params,
}: {
  params: Promise<{ toolId: string }>;
}) {
  const { toolId } = use(params);
  const tool = getToolById(toolId);

  if (!tool) notFound();

  const Icon = iconMap[tool.iconName] ?? Sparkles;

  const [refreshKey, setRefreshKey] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [showPasswords, setShowPasswords] = useState(true);

  // Credentials auto-generated on load, regenerated on refresh
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const credentials = useMemo(() => generateFakeCredentials(tool.id), [tool.id, refreshKey]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href={`/tools/${tool.id}`}
        className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-200 mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {tool.name}
      </Link>

      {/* Page Header */}
      <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#111118] p-6 sm:p-8 mb-6">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-5 pointer-events-none`}
        />
        <div
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${tool.gradient} opacity-70`}
        />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${tool.gradient} shadow-lg`}
            >
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-white sm:text-2xl">
                {tool.name} — Free Accounts
              </h1>
              <p className="text-sm text-zinc-500 mt-0.5">
                5 working credentials ready to use
              </p>
            </div>
          </div>
          <button
            onClick={() => { setRefreshKey((k) => k + 1); setRevealed(false); }}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.97]"
          >
            <RefreshCcw className="h-4 w-4" />
            Refresh List
          </button>
        </div>
      </div>

      {/* Show Passwords Button */}
      {!revealed && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-2xl border border-white/8 bg-[#111118] p-8 text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/15">
              <KeyRound className="h-8 w-8 text-violet-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Passwords are hidden</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Click below to reveal 5 free {tool.name} credentials
              </p>
            </div>
            <button
              onClick={() => setRevealed(true)}
              className={`mt-2 inline-flex items-center gap-2.5 rounded-xl ${tool.accentColor} px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:shadow-2xl active:scale-[0.98]`}
            >
              <Eye className="h-5 w-5" />
              Show Passwords
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Credentials Table */}
      {revealed && (
      <motion.div
        key={refreshKey}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="rounded-2xl border border-white/8 bg-[#111118] overflow-hidden"
      >
        {/* Table header */}
        <div className="flex items-center justify-between border-b border-white/6 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-white">
              5 Credentials Available
            </span>
          </div>
          <button
            onClick={() => setShowPasswords((v) => !v)}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            {showPasswords ? (
              <EyeOff className="h-3.5 w-3.5" />
            ) : (
              <Eye className="h-3.5 w-3.5" />
            )}
            {showPasswords ? "Hide" : "Show"} Passwords
          </button>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/4">
          {credentials.slice(0, 5).map((cred, i) => (
            <div
              key={i}
              className="flex flex-col gap-1.5 px-5 py-3.5 hover:bg-white/3 transition-colors sm:flex-row sm:items-center sm:gap-4"
            >
              <span className="w-6 shrink-0 text-xs font-mono text-zinc-600">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Email */}
              <div className="flex min-w-0 flex-1 items-center">
                <span className="truncate text-sm font-mono text-zinc-300">
                  {cred.email}
                </span>
                <CopyButton text={cred.email} />
              </div>

              {/* Password */}
              <div className="flex items-center gap-1 sm:w-52">
                <span className="font-mono text-sm text-zinc-300 tracking-wider">
                  {showPasswords ? cred.password : "••••••••••••"}
                </span>
                <CopyButton text={cred.password} />
              </div>
            </div>
          ))}
        </div>


      </motion.div>
      )}
    </div>
  );
}
