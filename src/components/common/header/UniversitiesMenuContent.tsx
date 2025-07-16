 'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

type Props = {
  universities: string[][] | undefined;
  error: string | null;
};

const defaultUniversities = [
  'Cairo University', 'Ain Shams University', 'Alexandria University', 'Mansoura University',
  'Zagazig University', 'Tanta University', 'Helwan University', 'Benha University',
  'Assiut University', 'Suez Canal University', 'Minia University', 'South Valley University'
];

const UniversitiesMenuContent: React.FC<Props> = ({ universities, error }) => {
  const shouldUseDefaultUniversities = !universities || universities.flat().length === 0 || error;

  const universitiesToRender = shouldUseDefaultUniversities
    ? [defaultUniversities.slice(0, 6), defaultUniversities.slice(6)]
    : universities;

  return (
    <div className="w-[50vw] max-w-[500px] min-w-[300px] p-6 bg-white rounded-lg shadow-lg">
      <div className="flex gap-3">
        {/* Icon on the far left */}
        <div className="pt-1">
          <Image
            src="/database.svg"
            alt="Universities Icon"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Universities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {universitiesToRender.flat().map((university, index) => (
              <Link
                key={index}
                href={`/university/${university.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                className="block text-sm text-gray-600 hover:text-[#76B729] transition-colors py-1"
              >
                {university}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">Error loading universities: {error}</p>
        </div>
      )}
    </div>
  );
};

export default UniversitiesMenuContent;