import React, { useState } from 'react';
import { CreateNavMenu } from './CreateNavMenu';
import { navLinks, secNavLinks } from './data';
import { NavMenu } from './NavMenu';

export const NavMenuList = () => {
  const [navLink, setNavLink] = useState(navLinks);

  if (navLink && Object.keys(navLink).length === 0)
    return <CreateNavMenu label="Create New WatchList" />;

  return (
    <nav className="mb-4">
      <NavMenu items={navLinks} type="primary" />
      <NavMenu items={secNavLinks} type="secondary" />
    </nav>
  );
};
