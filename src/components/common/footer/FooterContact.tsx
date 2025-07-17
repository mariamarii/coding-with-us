import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FooterContactProps {
  address: string;
  email: string;
  phone: string;
}

const FooterContact: React.FC<FooterContactProps> = ({ address, email, phone }) => {
  return (
    <div className="w-full sm:w-[45%] lg:w-1/6 min-w-0">
      <h3 className="mb-4 font-bold font-[700] text-[#FFFFFF] text-[20px] text-xl sm:text-lg xs:text-base">
        Contact
      </h3>
      <div className="space-y-1 text-muted-foreground text-sm">
        <p className="break-words overflow-wrap-normal hyphens-auto">{address}</p>
        <p className="break-words overflow-wrap-normal hyphens-auto">{email}</p>
        <p className="break-words overflow-wrap-normal hyphens-auto">{phone}</p>
      </div>
    </div>
  );
};

export default FooterContact; 