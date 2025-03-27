import {
  Title,
  Text,
  Container,
} from '@mantine/core';
import { RootLayout } from '@components/layouts/root-layout.tsx';
import Head from '@components/seo/Head/Head.tsx';

const AppRoot = () => {
  return (
    <RootLayout>
      <Head title="Boilerplate" />
      <Container>
        <Title size={100}>Hello World!</Title>
        <Text size="xl">Welcome to the bulletproof-react boilerplate.</Text>
      </Container>
    </RootLayout>
  );
};

export default AppRoot;
