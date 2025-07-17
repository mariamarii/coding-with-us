import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FooterSectionProps {
  title: string;
  items: Array<{ label: string; href: string }>;
  error?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items, error }) => {
  return (
    <div className="w-full sm:w-[45%] lg:w-1/6">
      <h3 className="mb-4 font-bold font-[700] text-[#FFFFFF] text-[20px] text-xl sm:text-lg xs:text-base">
        {title}
      </h3>
      <nav className="flex flex-col gap-3 text-muted-foreground">
        {error ? (
          <p className="text-red-400 text-sm">{error}</p>
        ) : items.length === 0 ? (
          <p className="text-sm">No items available</p>
        ) : (
          items.map((item, index) => (
            <Button
              key={index}
              variant="link"
              asChild
              className="whitespace-normal break-words overflow-wrap-normal no-underline font-[400] text-[14px] text-[#FFFFFF] hover:text-primary p-0 h-auto  justify-start"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))
        )}
      </nav>
    </div>
  );
};

export default FooterSection; 