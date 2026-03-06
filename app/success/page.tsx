"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2, Copy, Check, RefreshCcw, AlertTriangle,
  ArrowLeft, ShieldAlert, KeyRound,
} from "lucide-react";
import { getToolById, generateFakeCredentials } from "../data/tools";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      title="Copy"
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

export default function SuccessPage() {
  const [toolId, setToolId] = useState<string>("chatgpt-plus");
  const [cred, setCred] = useState<{ email: string; password: string } | null>(null);
  const [showPassword, setShowPassword] = useState(true);
  const [accountWarning, setAccountWarning] = useState(false);

  useEffect(() => {
    // Read toolId from sessionStorage, fallback to "chatgpt-plus"
    const id = sessionStorage.getItem("og_tool_id") ?? "chatgpt-plus";
    setToolId(id);

    // Generate credentials immediately
    const tool = getToolById(id);
    if (tool) {
      setCred(generateFakeCredentials(tool.id)[0]);
    }

    const t = setTimeout(() => setAccountWarning(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const tool = getToolById(toolId);

  return (
    <div className="min-h-screen bg-[#0a0a10] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md flex flex-col gap-5">

        {/* ── Congrats Banner ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-[#0e1a14] p-6 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/5 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-emerald-500 to-teal-500 opacity-70" />
          <div className="relative flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15">
              <CheckCircle2 className="h-9 w-9 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight">
                🎉 Congratulations!
              </h1>
              <p className="mt-1 text-sm text-zinc-400">
                Verification successful — your free{" "}
                <span className="text-white font-semibold">
                  {tool?.name ?? "Premium"}
                </span>{" "}
                account is ready.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Credential Card ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          className="rounded-2xl border border-white/8 bg-[#111118] overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-white/6 px-5 py-3.5">
            <div className="flex items-center gap-2">
              <KeyRound className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-semibold text-white">Your Account</span>
            </div>
            <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Active
            </span>
          </div>

          {cred ? (
            <div className="divide-y divide-white/4">
              {/* Email */}
              <div className="flex flex-col gap-0.5 px-5 py-3.5">
                <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-600">
                  Email / Username
                </span>
                <div className="flex items-center">
                  <span className="font-mono text-sm text-zinc-200 break-all">
                    {cred.email}
                  </span>
                  <CopyButton text={cred.email} />
                </div>
              </div>
              {/* Password */}
              <div className="flex flex-col gap-0.5 px-5 py-3.5">
                <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-600">
                  Password
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-zinc-200 tracking-wider">
                    {showPassword ? cred.password : "••••••••••••"}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setShowPassword((v) => !v)}
                      className="rounded-md px-2 py-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                    <CopyButton text={cred.password} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="px-5 py-4 text-sm text-zinc-500">Generating credentials...</p>
          )}
        </motion.div>

        {/* ── Warning (appears after 4s) ────────────────────────── */}
        {accountWarning && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-2xl border border-amber-500/25 bg-[#1a1500] px-5 py-4"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-300">
                  Not Working? Try Another One
                </p>
                <p className="mt-0.5 text-xs text-amber-400/70 leading-relaxed">
                  If this email and password didn't work, don't worry — just
                  hit{" "}
                  <span className="text-amber-300 font-medium">
                    "Try Another Account"
                  </span>{" "}
                  below to get a fresh set of credentials and try again.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Security Notice ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.28, ease: "easeOut" }}
          className="rounded-xl border border-white/6 bg-[#111118] px-5 py-4"
        >
          <div className="flex items-start gap-3">
            <ShieldAlert className="h-4 w-4 mt-0.5 flex-shrink-0 text-zinc-500" />
            <p className="text-xs text-zinc-500 leading-relaxed">
              <span className="font-semibold text-zinc-400">Security tip:</span>{" "}
              Do not change the account password. These are shared credentials —
              changing them will lock out other users. Use a fresh browser
              session or incognito mode for best results.
            </p>
          </div>
        </motion.div>

        {/* ── Buttons ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.38, ease: "easeOut" }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href={toolId ? `/tools/${toolId}/passwords` : "/"}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.97]"
          >
            <RefreshCcw className="h-4 w-4" />
            Try Another Account
          </Link>
          <Link
            href={toolId ? `/tools/${toolId}` : "/"}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/8 bg-[#111118] px-4 py-3 text-sm font-medium text-zinc-400 transition hover:text-zinc-200 hover:border-white/15 active:scale-[0.97]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tool
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
