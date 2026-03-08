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
  title: "TheEliteAccess — Free Premium AI Tool Accounts | ChatGPT Plus, Canva Pro & More",
  description:
    "TheEliteAccess gives you free access to premium AI tools including ChatGPT Plus, Grammarly, Canva Pro, Netflix, Spotify, and more. Real working accounts, updated daily — no credit card required.",
  keywords: "TheEliteAccess, free premium accounts, free ChatGPT Plus, free Canva Pro, free AI tools, Grammarly free, premium accounts free",
  openGraph: {
    title: "TheEliteAccess — Free Premium AI Tool Accounts",
    description:
      "Get real, working free credentials for ChatGPT Plus, Canva Pro, Grammarly, and 10+ more premium tools. Updated daily by TheEliteAccess.",
    type: "website",
  },
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D0HGTX73V1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D0HGTX73V1');
          `}
        </Script>

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
