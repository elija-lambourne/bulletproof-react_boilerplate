import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoot from '@app/routes/root.tsx';
import LoginRoute from '@app/routes/auth/login-route.tsx';
import { paths } from '@config/paths.ts';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.auth.login.getHref()} element={<LoginRoute />} />
        <Route path={paths.app.root.getHref()} element={<AppRoot />} />

        {/* Protected Routes */}
        {/*
        <Route path={paths.app.upload.getHref()} element={
          <ProtectedRoute>
            <UploadRoute />
          </ProtectedRoute>
        } />
        */}

        {/* Error routes */}
      </Routes>
    </BrowserRouter>
  );
}