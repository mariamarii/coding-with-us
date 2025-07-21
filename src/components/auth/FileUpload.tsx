'use client';

import { Label } from '@/components/ui/label';
import { forwardRef } from 'react';

interface FileUploadProps {
  id: string;
  label: string;
  accept?: string;
  description?: string;
  [key: string]: any; // For register props and other HTML attributes
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ id, label, accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png", description = "PDF, DOC, JPG, PNG up to 10MB", ...props }, ref) => {
    return (
      <div>
        <Label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#76B729] transition-colors">
          <input
            type="file"
            id={id}
            accept={accept}
            ref={ref}
            {...props}
            className="hidden"
          />
          <label htmlFor={id} className="cursor-pointer">
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-[#76B729] font-medium">Upload your document</span>
              <span className="text-sm text-gray-500">{description}</span>
            </div>
          </label>
        </div>
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';

export default FileUpload;
