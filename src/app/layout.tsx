import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import type { Metadata } from "next";
import "./globals.css";
import  {Providers} from "./providers";
import AppHeader from "@/components/common/app-header";
import Footer from "@/components/common/app-footer";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en" className={``}>
      <body className="antialiased bg-[#121212] text-white">
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}
