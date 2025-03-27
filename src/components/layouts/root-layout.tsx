import * as React from 'react';
import { Container } from '@mantine/core';

type RootLayoutProps = {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {

  return (
    <Container className="h-screen flex flex-col items-center justify-center">
        {children}
    </Container>
  );
};