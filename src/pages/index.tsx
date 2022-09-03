import type { ReactElement } from 'react';

import PrimaryLayout from '@/components/layout/PrimaryLayout';
import SidebarLayout from '@/components/layout/SidebarLayout';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return <h1>Hello World</h1>;
};

export default Home;

// Add layout to individual page
Home.getLayout = (page: ReactElement) => {
  return (
    <PrimaryLayout>
      <SidebarLayout extra="Login" />
      {page}
    </PrimaryLayout>
  );
};
