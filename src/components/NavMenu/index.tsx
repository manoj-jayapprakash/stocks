import React from 'react';
import {
  DB_API_URL,
  PRIMARY_NAV_API_URL,
  SECONDARY_NAV_API_URL,
} from '../../constants/app';
import useFetch from '../../hooks/useFetch';
import { CreateNavMenu } from './CreateNavMenu';
import { NavMenu } from './NavMenu';

export interface NavItems {
  id: number;
  linkName: string;
}

export const NavMenuList = () => {
  const { data: primaryNavItems, error: primaryError } =
    useFetch<NavItems[]>(PRIMARY_NAV_API_URL);

  const { data: secondaryNavItems, error: secondaryError } = useFetch<
    NavItems[]
  >(SECONDARY_NAV_API_URL);

  if (primaryNavItems && Object.keys(primaryNavItems).length === 0)
    return (
      <div className="mx-auto">
        <CreateNavMenu label="Create New WatchList" type="primary" />
      </div>
    );

  if (primaryNavItems)
    return (
      <nav className="mb-4">
        <NavMenu items={primaryNavItems} type="primary" />
        {secondaryNavItems && Object.keys(secondaryNavItems).length !== 0 && (
          <NavMenu items={secondaryNavItems} type="secondary" />
        )}
      </nav>
    );
  return null;
};
