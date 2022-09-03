import Link from 'next/link';
import React from 'react';

export interface ISidebarLayout {
  extra: string;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ extra }) => {
  return (
    <nav>
      <input placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/">
        <a>{extra}</a>
      </Link>
    </nav>
  );
};

export default SidebarLayout;
