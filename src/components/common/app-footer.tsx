import Image from "next/image";
import Link from "next/link";
import { FooterProps } from "@/types/landingProps";


const Footer: React.FC<FooterProps> = ({ courses, categories, error }) => {
  const codingWithUs = [
    { label: "About", href: "/about" },
    { label: "What we offer", href: "/offer" },
    { label: "Professional certificate", href: "/certificate" },
    { label: "Free courses", href: "/free-courses" },
  ];

  const socialLinks = [
    {
      href: "https://instagram.com",
      icon: "/instagram.svg",
      alt: "Instagram",
    },
    {
      href: "https://linkedin.com",
      icon: "/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://linkedin.com",
      icon: "/twitter.svg",
      alt: "Xtwitter",
    },
  ];

  return (
    <footer className="bg-[#2a2a3a] text-white pt-12 pb-4 mt-auto w-full sm:pt-8 sm:pb-4 xs:pt-6 xs:pb-3">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 xs:gap-4">
          <div className="col-span-2 lg:col-span-3">
            <Image
              src="/whiteLogo.png"
              alt="Coding With Us Logo"
              width={131.57}
              height={68}
              className="mb-4 max-w-full h-auto sm:max-w-[120px] xs:max-w-[100px]"
            />
            <p className="text-sm mb-4 leading-relaxed sm:text-xs xs:mb-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p className="text-base font-normal sm:text-xs xs:mb-2">Follow us on:</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-300 hover:opacity-80"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 sm:text-lg xs:text-base xs:mb-2">
              Browse Courses
            </h3>
            <nav className="flex flex-col gap-3 sm:gap-3">
              {error ? (
                <p className="text-red-400 text-sm">{error}</p>
              ) : courses.length === 0 ? (
                <p className="text-sm">No courses available</p>
              ) : (
                courses.map((course, index) => (
                  <Link
                    key={index}
                    href={`/courses/${course.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm no-underline hover:text-gray-300 transition-colors duration-300 sm:text-xs"
                  >
                    {course}
                  </Link>
                ))
              )}
            </nav>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 sm:text-lg xs:text-base xs:mb-2">
              Categories
            </h3>
            <nav className="flex flex-col gap-3 sm:gap-3">
              {error ? (
                <p className="text-red-400 text-sm">{error}</p>
              ) : categories.length === 0 ? (
                <p className="text-sm">No categories available</p>
              ) : (
                categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm no-underline hover:text-gray-300 transition-colors duration-300 sm:text-xs"
                  >
                    {category}
                  </Link>
                ))
              )}
            </nav>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 sm:text-lg xs:text-base xs:mb-2">
              Coding with us
            </h3>
            <nav className="flex flex-col gap-3 sm:gap-3">
              {codingWithUs.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm no-underline hover:text-gray-300 transition-colors duration-300 sm:text-xs"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h3 className="text-xl font-bold mb-4 sm:text-lg xs:text-base xs:mb-2">
              Contact
            </h3>
            <div className="space-y-1 sm:text-xs">
              <p className="text-sm break-all">
                BAHRAIN/RIFAA/ALHAJIYAT/BLOCK939/ROAD3912/BUILDING560/FALAT21
              </p>
              <p className="text-sm break-all">Coding@gmail.com</p>
              <p className="text-sm break-all">000201232546</p>
              <div className="flex gap-3 mt-4 sm:mt-3 xs:flex-col xs:gap-2">
                <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/app-store.png"
                    alt="Download on App Store"
                    width={120}
                    height={40}
                    className="max-w-[120px] h-auto hover:opacity-80 transition-opacity duration-300 sm:max-w-[100px] xs:max-w-[90px]"
                  />
                </Link>
                <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/google-play.png"
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                    className="max-w-[120px] h-auto hover:opacity-80 transition-opacity duration-300 sm:max-w-[100px] xs:max-w-[90px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-4 flex justify-between items-center sm:mt-6 sm:pt-3 sm:flex-col sm:items-start sm:gap-3">
          <p className="text-base sm:text-xs">© 2025 Coding With Us. All rights reserved</p>
          <Link
            href="/terms-privacy"
            className="text-sm no-underline hover:text-gray-300 transition-colors duration-300 sm:text-xs"
          >
            Terms & Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;