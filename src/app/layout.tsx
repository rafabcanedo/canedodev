import type { Metadata } from "next";

import "./globals.css";
import { geistMono, geistSans, poppins, roboto } from "@/lib/fonts";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/my-components/navbar";
import { Footer } from "@/components/my-components/footer";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Canedo Dev",
  description: "A portfolio developed by Canedo dev",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", roboto.variable, poppins.variable, geistSans.variable, geistMono.variable, "font-sans", geist.variable)}
    >
      <Navbar />
      <body className="min-h-full flex flex-col">
        {children}
      </body>
      <Footer />
    </html>
  );
}