import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Retry } from '../utils';

// const HomePage = lazy(() => Retry(() => import('../pages/Home')));
const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const WatchList = lazy(() => import('../components/Table/Table'));
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/watchlist/:watchlistId" element={<WatchList />} />
    </Routes>
  );
};
