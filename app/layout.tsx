import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import Providers from "@/components/providers/session-provider";
import AnalyticsTracker from "@/components/admin/AnalyticsTracker";
import { baseMetadata, organizationJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${playfair.variable} ${poppins.variable} antialiased`}
      >
        <Providers>
          <Suspense fallback={null}>
            <AnalyticsTracker />
          </Suspense>
          <Suspense fallback={null}>{children}</Suspense>
          <JsonLd data={organizationJsonLd()} id="organization-jsonld" />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
