'use client';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface SectionHeaderProps {
  title: string;
  estimatedTime: number;
}

export function SectionHeader({ title, estimatedTime }: SectionHeaderProps) {
  return (
    <Card className="mb-8 border-none shadow-none">
      <CardHeader className="p-0">
        <CardTitle className="text-3xl font-bold">
          {title}
        </CardTitle>

        <CardDescription className="text-sm">
          Estimated time to complete: {estimatedTime} mins
        </CardDescription>
      </CardHeader>
    </Card>
  );
}