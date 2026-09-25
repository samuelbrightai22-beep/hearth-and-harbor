import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Hearth & Harbor — Considered Goods for the Modern Home",
  description:
    "Hearth & Harbor is a curated marketplace for considered home goods — kitchen, dining, bath, decor, tools, watches, and books. Free shipping on orders over $75.",
  keywords: [
    "home goods",
    "kitchenware",
    "bath essentials",
    "home decor",
    "curated marketplace",
    "considered goods",
    "Hearth & Harbor",
  ],
  authors: [{ name: "Hearth & Harbor" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Hearth & Harbor — Considered Goods for the Modern Home",
    description:
      "A curated marketplace for considered home goods — kitchen, dining, bath, decor, tools, watches, and books.",
    siteName: "Hearth & Harbor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hearth & Harbor",
    description: "Considered goods for the modern home.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
