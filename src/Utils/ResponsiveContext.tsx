// Utils/ResponsiveContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

interface ResponsiveContextProps {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const ResponsiveContext = createContext<ResponsiveContextProps>({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
});

export const ResponsiveProvider = ({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 601px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

  return (
    <ResponsiveContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => useContext(ResponsiveContext);
