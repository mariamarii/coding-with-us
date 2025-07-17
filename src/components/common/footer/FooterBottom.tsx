import Link from "next/link";
import { Button } from "@/components/ui/button";

const FooterBottom: React.FC = () => {
  return (
    <div className="text-muted-foreground mt-10 gap-4 border-t border-gray-500">
      <div className="w-[90%] mx-auto text-muted-foreground flex flex-col justify-between font-[400] text-[14px] text-[#FFFFFF] gap-4 pt-8 text-sm md:flex-row md:items-center">
        <p>© 2025 Coding With Us. All rights reserved</p>
        <nav className="flex gap-4">
          <Button
            variant="link"
            asChild
            className="no-underline font-[400] text-[14px] text-[#FFFFFF] hover:text-primary p-0 h-auto justify-start"
          >
            <Link href="/terms-privacy">Terms & Privacy</Link>
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default FooterBottom; 