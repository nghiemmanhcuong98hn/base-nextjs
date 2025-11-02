'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// --- types ---
type AppContextType = {
  user: string | null;
  setUser: (value: string | null) => void;
};

// --- create context ---
const AppContext = createContext<AppContextType | undefined>(undefined);

// --- provider ---
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  return <AppContext.Provider value={{ user, setUser }}>{children}</AppContext.Provider>;
};

// --- custom hook ---
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
