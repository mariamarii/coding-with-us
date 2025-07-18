"use client";
import React, { Suspense } from 'react';
import AppHeader from './app-header';
import { HeaderProps } from '@/types/landingProps';

const HeaderWrapper: React.FC<HeaderProps> = (props) => {
  return (
    <Suspense fallback={<div className="h-16 bg-white animate-pulse" />}>
      <AppHeader {...props} />
    </Suspense>
  );
};

export default HeaderWrapper; 