import * as React from 'react';

type LoginLayoutProps = {
  children: React.ReactNode;
}

export const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <div className="flex items-center justify-center h-screen">
      {children}
    </div>
  );
};