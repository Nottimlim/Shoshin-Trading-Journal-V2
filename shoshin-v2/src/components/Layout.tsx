import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import { NavItem } from '@/types/NavItem';

const navItems: NavItem[] = [
  { href: '/', label: 'Dashboard' },
  { href: '/trades', label: 'Trades' },
  { href: '/journal', label: 'Journal' },
  { href: '/analytics', label: 'Analytics' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar navItems={navItems} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
