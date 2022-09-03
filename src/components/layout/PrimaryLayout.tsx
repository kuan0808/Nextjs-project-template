import Head from 'next/head';
import React, { ReactNode } from 'react';

export interface IPrimaryLayout {
  children: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
