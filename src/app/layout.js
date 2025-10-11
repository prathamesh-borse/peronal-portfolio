import { GlobalProvider } from "./context/GlobalContext";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://prathameshdev.vercel.app/";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prathamesh Borse | Portfolio",
  description: "Prathamesh Borse Portfolio Website",
  icons: {
    icon: "/favicon_2.png",
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Prathamesh Borse | Portfolio",
    description: "Portfolio of Prathamesh Borse — Full Stack Developer.",
    url: "/",
    siteName: "Prathamesh Borse",
    images: [
      {
        url: "/favicon_2.png",
        width: 512,
        height: 512,
        alt: "Prathamesh Borse",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathamesh Borse | Portfolio",
    description: "Portfolio of Prathamesh Borse — Full Stack Developer.",
    images: ["/favicon_2.png"],
    creator: "@imprathamesh01",
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="RLli5i7hSxKcj_ZHtgAKBN1oa5eUUQP9GSphdVKGFg8"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JP9F10VGXT"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JP9F10VGXT');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P3NQ27TQ');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3NQ27TQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
