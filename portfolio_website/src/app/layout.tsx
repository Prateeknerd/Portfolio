import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Prateek Tammisetty — Developer Portfolio",
  description: "Computer Science & Data Science student at MIT Bengaluru. Building with Python, Java, Flutter & more — turning ideas into working software.",
  keywords: ["Portfolio", "Data Science", "Machine Learning", "Python", "Flutter", "Java", "Developer", "Manipal", "Prateek Tammisetty"],
  openGraph: {
    title: "Prateek Tammisetty — Developer Portfolio",
    description: "CS & Data Science student building real-world projects.",
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
      <head>
        {/* Cabinet Grotesk & Satoshi via Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@900,800,700&f[]=satoshi@400,700&display=swap"
        />
      </head>
      <body className={`${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
