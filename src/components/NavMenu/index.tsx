import React, { useState } from 'react';
import { CreateNavMenu } from './CreateNavMenu';
import { PrimaryNav } from './PrimaryNav';

export const NavMenu = () => {
  const [navLink, setNavLink] = useState({ id: 1, linkName: 'Watchlist 1' });

  const navLinks = [
    { id: 1, linkName: 'Watchlist 1' },
    { id: 2, linkName: 'Watchlist 2' },
    { id: 3, linkName: 'Watchlist 3' },
    { id: 4, linkName: 'Watchlist 4' },
    { id: 5, linkName: 'Watchlist 5' },
  ];

  if (navLink && Object.keys(navLink).length === 0)
    return <CreateNavMenu label="Create New WatchList" />;

  return (
    <nav className="mb-4">
      <PrimaryNav items={navLinks} />
    </nav>
  );
};
