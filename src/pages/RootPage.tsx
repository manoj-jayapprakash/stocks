import React, { ReactElement } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type RootPageProps = {
  children: ReactElement;
};

export const RootPage = (props: RootPageProps) => {
  return (
    <div className="container mx-auto px-4 flex flex-col gap-8">
      <Header />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};
