import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UnlockPremium — Real Premium Accounts for Free",
  description:
    "UnlockPremium gives you real, working premium accounts for ChatGPT Plus, Netflix, Spotify, Canva Pro, and more — shared daily by the community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sora.variable} antialiased min-h-screen bg-[#0a0a0f] text-white font-[family-name:var(--font-sora)]`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
