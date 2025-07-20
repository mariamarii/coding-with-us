'use client';

interface SectionTextContentProps {
  content: string;
}

export function SectionTextContent({ content }: SectionTextContentProps) {
  return (
    <div className="prose prose-lg max-w-none mb-8">
      <p className="text-[#000000] font-normal text-base leading-relaxed">
        {content}
      </p>
    </div>
  );
}