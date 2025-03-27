import {Button, Container, Title} from '@mantine/core';
import { LoginLayout } from '@components/layouts/login-layout.tsx';
import { useAuth } from 'react-oidc-context';
import Head from '@components/seo/Head/Head.tsx';

const LoginRoute = () => {
  const auth = useAuth();

  return (
    <LoginLayout>
      <Head title="Login" />
      <Container>
          <Title>Please continue to the login.</Title>
          <Button mt="md" onClick={() => auth.signinRedirect()}>Continue →</Button>
      </Container>
    </LoginLayout>
  );
};

export default LoginRoute;
