import React from 'react';
import { PrimaryNav } from './PrimaryNav';

export const NavMenu = () => {
  const navLinks = [
    { id: 1, linkName: 'Watchlist 1' },
    { id: 2, linkName: 'Watchlist 2' },
    { id: 3, linkName: 'Watchlist 3' },
    { id: 4, linkName: 'Watchlist 4' },
    { id: 5, linkName: 'Watchlist 5' },
  ];
  return (
    <nav className="mb-4">
      <PrimaryNav items={navLinks} />
    </nav>
  );
};
