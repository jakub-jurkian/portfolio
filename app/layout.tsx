import type { Metadata } from "next";
import { Inter } from "next/font/google";
// The stylesheet is processed by Next.js, but may not have TypeScript declarations.
import "./globals.css";

const description =
  "Java / Spring Boot backend developer and Computer Science student at the University of Gdańsk. Projects, CV and contact.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jakub-jurkian-portfolio.vercel.app"),
  title: {
    default: "Jakub Jurkian | Java Backend Developer",
    template: "%s | Jakub Jurkian",
  },
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Jakub Jurkian",
    title: "Jakub Jurkian | Java Backend Developer",
    description,
    locale: "en_US",
  },
};

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
