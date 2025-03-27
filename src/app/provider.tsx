import * as React from 'react';
import { AuthProvider } from 'react-oidc-context';
import { MantineProvider,MantineThemeOverride, createTheme} from '@mantine/core';
import {Notifications} from "@mantine/notifications"
import '@mantine/core/styles.css';
import matineTheme from '@config/matine-theme.ts';
import oidcConfig from '@config/oidc.ts';
import * as Sentry from "@sentry/react";
import '@mantine/notifications/styles.css';

const theme: MantineThemeOverride = createTheme(matineTheme);
Sentry.init({
  dsn: "https://8876d5c57d0dcae5a7ad7f427584107b@o4508869057642496.ingest.de.sentry.io/4508869060526160",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

type AppProviderProps = {
  children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {

  return <AuthProvider {...oidcConfig}>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Notifications/>
      {children}
    </MantineProvider>
  </AuthProvider>;
};