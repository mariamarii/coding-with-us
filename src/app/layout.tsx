import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  {Providers} from "./providers";
import AppHeader from "@/components/common/app-header";
import Footer from "@/components/common/app-footer";
import { fetchCourses } from "@/queries/courses";
import { fetchCategories } from "@/queries/categories";
import { CourseCardProps } from "@/types/skills";
import { CategoryFolder } from "@/types/skills";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased bg-[#121212] text-white">
      <Providers>
        <AppHeader courses={courses} categories={categories} error={error} />
        {children}
        <Footer courses={courses} categories={categories} error={error} />
      </Providers>
      </body>
    </html>
  );
}
