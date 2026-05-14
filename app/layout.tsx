import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jacedo solution's e-commerce shop",
  description: "Your one stop shop to getting all you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} ${geistMono.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-[90vw] mx-auto">
        <nav>
        <Navbar />
        </nav>

        <main className="min-h-[90vh] text-sm">
        {children}
        </main>

        <footer>
        <Footer />
        </footer>
        </body>
    </html>
  );
}
