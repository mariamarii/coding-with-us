'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface SectionDocumentDownloadProps {
  sectionTitle: string;
  documentTitle?: string;
}

export function SectionDocumentDownload({ 
  sectionTitle: SectionTitle, 
  documentTitle = "Section 02" 
}: SectionDocumentDownloadProps) {
  const handleDownload = () => {
    // In a real app, this would trigger the actual download
    console.log('Downloading document for:', SectionTitle);
    // You could add actual download logic here
    // window.open('/path-to-document.pdf', '_blank');
  };

  return (
    <Card className="w-full border shadow-sm">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-4 lg:space-y-0 p-4">
          {/* Left Section - Document Preview */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="rounded-lg p-4 min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] relative w-full max-w-[200px]">
              {/* First Document Icon */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                <Image
                  src="/document.svg"
                  alt="Document"
                  width={120}
                  height={120}
                  className="sm:w-[140px] sm:h-[140px] lg:w-[150px] lg:h-[150px]"
                />
              </div>
              
              {/* Second Document Icon */}
              <div className="absolute top-2 left-6 sm:top-4 sm:left-8 lg:left-10">
                <Image
                  src="/document.svg"
                  alt="Document Overlay"
                  width={120}
                  height={120}
                  className="sm:w-[140px] sm:h-[140px] lg:w-[150px] lg:h-[150px]"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Download Prompt */}
          <div className="flex-1 flex flex-col justify-center items-center px-4 lg:px-0 pb-4 lg:pb-0">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center lg:text-left">
              Get Section document "{documentTitle}"
            </h3>
            
            <Button 
              onClick={handleDownload}
              className="bg-[#76B729] hover:bg-[#76B729] text-white font-medium py-3 px-6 rounded-lg w-full sm:w-fit"
            >
              Download template
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}