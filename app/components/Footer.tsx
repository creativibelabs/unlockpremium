import Link from "next/link";
import { Unlock, AlertTriangle } from "lucide-react";

export default function Footer() {
  const links = {
    Directory: [
      { label: "Home", href: "/" },
      { label: "All Tools", href: "/#tools" },
      { label: "Canva Pro", href: "/tools/canva-pro" },
      { label: "ChatGPT Plus", href: "/tools/chatgpt-plus" },
    ],
    Community: [
      { label: "Request a Tool", href: "mailto:contact@freevault.app" },
      { label: "Report Broken", href: "mailto:contact@freevault.app" },
    ],
  };

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f]">
      {/* Disclaimer Banner */}
      <div className="border-b border-yellow-500/20 bg-yellow-500/5 px-4 py-3">
        <div className="mx-auto flex max-w-7xl items-start gap-3 sm:items-center">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500 sm:mt-0" />
          <p className="text-xs text-yellow-200/70">
            <span className="font-semibold text-yellow-400">Disclaimer:</span>{" "}
            All credentials listed on UnlockPremium are{" "}
            <span className="font-medium">real and shared by the community</span>. Accounts may expire or get changed — refresh for updated credentials. Use them quickly before they run out.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-700">
                <Unlock className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Unlock<span className="text-violet-400">Premium</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
              The #1 source for real, working premium accounts. Get instant access to top tools — completely free.
            </p>

          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-white">{section}</h3>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} UnlockPremium. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Real credentials, updated daily by our community.
          </p>
        </div>
      </div>
    </footer>
  );
}
