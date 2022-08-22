import React from 'react';
import { Button, TextBox } from '../Form';
import { Search } from '../Search/Search.';

export const Header = () => {
  return (
    <header className="px-2 py-4 flex items-center justify-between">
      <h3 className="text-2xl">Watchlists</h3>
      <Search />
      <Button type="button" buttonStyles="btn btn-sm ml-4" label="Logout" />
    </header>
  );
};
