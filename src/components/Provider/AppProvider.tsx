'use client'
import React from 'react';
import ReduxProvider from '@/redux/ReduxProvider';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
      <ReduxProvider>
        {children}
      </ReduxProvider>
  );
};

export default AppProvider