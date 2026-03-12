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
        {/* Popunder */}
        <script src="https://pl28861013.effectivegatecpm.com/64/c1/a3/64c1a34fab3f219cff6f4ceda2b80e62.js"></script>
        
        {/* Social Bar */}
        <script src="https://pl28861122.effectivegatecpm.com/54/63/8f/54638fd1140cfbd2f17cb7ab3f18852a.js"></script>

        {/* Native Banner */}
        <script async="async" data-cfasync="false" src="https://pl28861155.effectivegatecpm.com/f06590fa33eb95f0637019443f6107ab/invoke.js"></script>

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

        {/* OGAds Locker */}
        <Script
          id="ogads-locker"
          src="https://knowledz.com/cl/js/lk2146"
          strategy="lazyOnload"
        />

        {/* Adsterra Banner 728x90 */}
        <Script id="adsterra-banner-options" strategy="afterInteractive">
          {`
            atOptions = {
              'key': '2180963716da8b4c30b064ea6e277540',
              'format': 'iframe',
              'height': 90,
              'width': 728,
              'params': {}
            };
          `}
        </Script>
        <Script
          id="adsterra-banner-invoke"
          src="https://www.highperformanceformat.com/2180963716da8b4c30b064ea6e277540/invoke.js"
          strategy="afterInteractive"
        />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
