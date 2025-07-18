import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import type { Metadata } from "next";
import "./globals.css";
import  {Providers} from "./providers";
import AppHeader from "@/components/common/app-header";
import Footer from "@/components/common/app-footer";
import { fetchCategories } from '@/queries/categories';
import { fetchCourses } from '@/queries/courses';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch data for header and footer with error handling
  let courseTitles: string[] = [];
  let categoryNames: string[] = [];
  
  try {
    const categories = await fetchCategories();
    const courses = await fetchCourses();
    
    courseTitles = courses.map(course => course.title);
    categoryNames = categories.map(category => category.name);
  } catch (error) {
    // Provide fallback data
    courseTitles = ['Web Development', 'Mobile Development', 'Data Science', 'Design'];
    categoryNames = ['Web Development', 'Mobile Development', 'Data Science', 'Design'];
  }

  return (
    <html lang="en" className={``}>
      <body className="antialiased bg-[#121212] text-white">
        <Providers>
          <AppHeader 
            courses={courseTitles} 
            categories={categoryNames} 
            error={null} 
          />
          {children}
          <Footer 
            courses={courseTitles} 
            categories={categoryNames} 
            error={null} 
          />
        </Providers>
      </body>
    </html>
  );
}
