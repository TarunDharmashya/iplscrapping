import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { DashboardProvider } from "@/context/DashboardContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPL Live Dashboard | Matches, Points & Schedule",
  description: "Real-time IPL dashboard with live/upcoming match, points table, and schedule.",
  icons: {
    icon: "/TeamsLogo/ipl-logo.png",
    shortcut: "/TeamsLogo/ipl-logo.png",
    apple: "/TeamsLogo/ipl-logo.png"
  },
  openGraph: {
    images: [
      {
        url: "/TeamsLogo/ipl-logo.png",
        width: 120,
        height: 120,
        alt: "IPL Logo"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <DashboardProvider>
          <Header />
          {children}
          <Footer />
        </DashboardProvider>
      </body>
    </html>
  );
}
