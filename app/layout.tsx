import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "theeliteaccess — Real Premium Accounts for Free",
  description:
    "theeliteaccess gives you real, working premium accounts for ChatGPT Plus, Netflix, Spotify, Canva Pro, and more — shared daily by the community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://pl28861013.effectivegatecpm.com/64/c1/a3/64c1a34fab3f219cff6f4ceda2b80e62.js"></script>
        <script src="https://pl28861122.effectivegatecpm.com/54/63/8f/54638fd1140cfbd2f17cb7ab3f18852a.js"></script>
      </head>
      <body
        className={`${sora.variable} antialiased min-h-screen bg-[#0a0a0f] text-white font-[family-name:var(--font-sora)]`}
      >
        <Script
          id="ogads-locker"
          src="https://knowledz.com/cl/js/lk2146"
          strategy="lazyOnload"
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
