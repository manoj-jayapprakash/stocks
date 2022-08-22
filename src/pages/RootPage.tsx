import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { NavMenuList } from '../components/NavMenu';

type RootPageProps = {
  children: React.ReactNode;
};

export const RootPage = (props: RootPageProps) => {
  return (
    <div className="container mx-auto px-4 flex flex-col gap-8">
      <Header />
      <NavMenuList />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};
