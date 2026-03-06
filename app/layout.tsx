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
