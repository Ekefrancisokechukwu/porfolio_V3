import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveProvider from "@/context/active_section";
import Footer from "./layout/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Franks(specter) Portfolio",
  description: "Franks porfolio",
  metadataBase: new URL("https://specter-portfolio.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveProvider>{children}</ActiveProvider>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
