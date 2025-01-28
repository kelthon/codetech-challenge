import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import HomePage from './pages/home.tsx';
import RegisterPage from './pages/register.tsx';
import AuthenticationPage from './pages/auth.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<AuthenticationPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
