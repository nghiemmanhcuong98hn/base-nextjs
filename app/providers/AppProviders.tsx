'use client';

import React from 'react';
import { AppProvider } from '../context/AppContext';
import { CartProvider } from '../context/CartContext';
import SWRProvider from './SWRProvider';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <CartProvider>
        <SWRProvider>{children}</SWRProvider>
      </CartProvider>
    </AppProvider>
  );
};
