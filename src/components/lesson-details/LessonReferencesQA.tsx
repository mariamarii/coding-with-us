'use client';

import { Button } from '@/components/ui/button';

export function SectionReferencesQA() {
  const references = [
    'http://www.link.com',
    'http://www.link.com',
    'http://www.link.com',
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">References</h3>
        <div className="flex flex-wrap items-center gap-1 text-sm">
          {references.map((link, index) => (
            <div key={index} className="flex items-center">
              <Button
                variant="link"
                asChild
                className="text-blue-600 hover:underline p-0 h-auto"
              >
                <a href={link}>{link}</a>
              </Button>
              {index < references.length - 1 && (
                <span className="text-gray-600">, </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}