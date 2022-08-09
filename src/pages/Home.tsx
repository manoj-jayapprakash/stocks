import React from 'react';
import { NavMenu } from '../components/NavMenu';
import { StockTable } from '../components/Table/Table';
import { RootPage } from './RootPage';

export default function Home() {
  return (
    <RootPage>
      <div>
        <NavMenu />
        <StockTable />
      </div>
    </RootPage>
  );
}
