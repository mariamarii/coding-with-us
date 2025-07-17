import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FooterLogoProps {
  tagline: string;
}

const FooterLogo: React.FC<FooterLogoProps> = ({ tagline }) => {
  const logo = {
    src: "/whiteLogo.png",
    alt: "Coding With Us Logo",
    title: "Coding With Us",
    url: "/",
  };

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
    <div className="mb-8 lg:mb-0 w-full sm:w-[30%] lg:w-[15%]">
      <div className="flex items-center gap-2 lg:justify-start">
        <Link href={logo.url} className="flex items-center gap-2">
          <Image
            src={logo.src}
            alt={logo.alt}
            title={logo.title}
            width={131.57}
            height={68}
            className="h-10 w-auto"
          />
        </Link>
      </div>
      <p className="mt-4 font-[400] text-[14px] sm:text-xs">{tagline}</p>
      <p className="text-base font-normal mt-4 sm:text-xs">Follow us on:</p>
      <div className="flex gap-3 mt-2">
        {socialLinks.map((social, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            asChild
            className="transition-opacity duration-300 hover:opacity-80"
          >
            <Link href={social.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.icon}
                alt={social.alt}
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FooterLogo; 