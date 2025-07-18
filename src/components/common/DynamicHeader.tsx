"use client";
import React, { Suspense } from 'react';
import { HeaderProps } from '@/types/landingProps';
import { useClientSide } from '@/hooks/useClientSide';

// Dynamic import for the full header
const AppHeader = React.lazy(() => import('./app-header'));

const DynamicHeader: React.FC<HeaderProps> = (props) => {
  const isClient = useClientSide();

  if (!isClient) {
    return null;
  }

  return <AppHeader {...props} />;
};

export default DynamicHeader; 