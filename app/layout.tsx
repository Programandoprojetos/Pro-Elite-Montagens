import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Pro Elite Montagens",
  description: "Plataforma para montagem e desmontagem de moveis."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
