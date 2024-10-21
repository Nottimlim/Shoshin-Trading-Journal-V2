import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div 
      id="sidebar" 
      className={`bg-blue-600 text-white w-64 flex flex-col fixed h-full z-40 transition-all duration-300 ease-in-out ${
        isOpen ? 'left-0' : '-left-64'
      }`}
    >
      <div className="py-7 px-4 flex-grow">
        <h2 className="text-2xl font-bold mb-4 text-center mt-8">Menu</h2>
        <hr className="border-t border-white w-full mb-6" />
        <nav className="w-full">
          <Link href="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-center mb-4">
            Dashboard
          </Link>
          <Link href="/trades" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-center mb-4">
            Trades
          </Link>
          <Link href="/trades/new" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 text-center mb-4">
            New Trade
          </Link>
          {/* Add login/logout links here based on auth state */}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
