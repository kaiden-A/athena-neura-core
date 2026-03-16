import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

// Matching the "Public Sans" font used in your HTML design
const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Motion-U · Legacy Reborn",
  description: "The Echoes of Caelora: Harnessing the intelligence of Athena and Neura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Loading Material Symbols for the rocket and star icons */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${publicSans.variable} font-display bg-space-void text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}