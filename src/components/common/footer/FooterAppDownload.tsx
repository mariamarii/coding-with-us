import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FooterAppDownload: React.FC = () => {
  return (
    <div className="w-[90%] mx-auto max-w-7xl flex justify-end">
      <div className="flex flex-col gap-3 sm:gap-2">
        <Button variant="ghost" asChild className="p-0">
          <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/app-store.svg"
              alt="Download on App Store"
              width={120}
              height={40}
              className="max-w-[120px] h-auto hover:opacity-80 transition-opacity duration-300 sm:max-w-[100px] xs:max-w-[90px]"
            />
          </Link>
        </Button>
        <Button variant="ghost" asChild className="p-0">
          <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <Image
              src="/google-play.svg"
              alt="Get it on Google Play"
              width={120}
              height={40}
              className="max-w-[120px] h-auto hover:opacity-80 transition-opacity duration-300 sm:max-w-[100px] xs:max-w-[90px]"
            />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FooterAppDownload; 