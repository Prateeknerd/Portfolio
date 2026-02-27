import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description: "Personal portfolio showcasing my skills, projects, and professional experience as a software developer.",
  keywords: ["Software Engineer", "Frontend Developer", "Next.js", "React", "Portfolio"],
  openGraph: {
    title: "Portfolio | Full-Stack Developer",
    description: "Personal portfolio showcasing my skills, projects, and professional experience.",
    url: "https://yourportfolio.com",
    siteName: "Developer Portfolio",
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
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} antialiased font-sans bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
