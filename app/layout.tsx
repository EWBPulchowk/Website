import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScrolling from "@/components/SmoothScroll";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";


const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "EWB PULCHOWK",
  description: "Ewb Pulchowk Official Website",
  icons:"/EWB Logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(lato.className, "antialiased")}>
        <header >
          <Navbar />
        </header>
        <SmoothScrolling>
          <div className="fixed top-0 left-0 w-full h-screen bg-[url('/_next/static/media/background.b3e6487f.jpg')] bg-top bg-no-repeat bg-cover -z-10" />
          <div className="relative z-10">{children}</div>{" "}
        </SmoothScrolling>
      <footer>
        <Footer />
      </footer>

      </body>
      
    </html>
  );
}
