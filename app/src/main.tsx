import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import HomePage from './pages/home.tsx';
import RegisterPage from './pages/register.tsx';
import AuthenticationPage from './pages/auth.tsx';
import { AuthProvider } from './hooks/auth-provider.tsx';
import RequiredAuth from './hooks/required-auth.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequiredAuth>
                <HomePage />
              </RequiredAuth>
            }
          />
          <Route
            path="/register"
            element={
              <RequiredAuth>
                <RegisterPage />
              </RequiredAuth>
            }
          />
          <Route path="/signin" element={<AuthenticationPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
