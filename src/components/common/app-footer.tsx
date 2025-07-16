import { FooterProps } from "@/types/landingProps";
import { FooterLogo, FooterSection, FooterContact, FooterBottom, FooterAppDownload } from "./footer";

const Footer: React.FC<FooterProps> = ({ courses, categories, error }) => {
  const tagline = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

  const codingWithUs = [
    { label: "About", href: "/about" },
    { label: "What we offer", href: "/offer" },
    { label: "Professional certificate", href: "/certificate" },
    { label: "Free courses", href: "/free-courses" },
  ];

  const courseItems = courses.map(course => ({
    label: course,
    href: `/courses/${course.toLowerCase().replace(/\s+/g, "-")}`
  }));

  const categoryItems = categories.map(category => ({
    label: category,
    href: `/categories/${category.toLowerCase().replace(/\s+/g, "-")}`
  }));

  const contactInfo = {
    address: "BAHRAIN/RIFAA/ALHAJIYAT/BLOCK939/ROAD3912/BUILDING560/FALAT21",
    email: "Coding@gmail.com",
    phone: "000201232546"
  };

  return (
    <footer className="bg-[#2a2a3a] text-white pt-32 pb-8">
      <div className="w-[72%] mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-between gap-12 lg:gap-0">
          <FooterLogo tagline={tagline} />
          
          <FooterSection 
            title="Browse Courses" 
            items={courseItems} 
            error={error || undefined} 
          />
          
          <FooterSection 
            title="Categories" 
            items={categoryItems} 
            error={error || undefined} 
          />
          
          <FooterSection 
            title="Coding with us" 
            items={codingWithUs} 
          />
          
          <FooterContact 
            address={contactInfo.address}
            email={contactInfo.email}
            phone={contactInfo.phone}
          />
        </div>
      </div>
      
      {/* App Download Section */}
      <FooterAppDownload />
      
      <FooterBottom />
    </footer>
  );
};

export default Footer;