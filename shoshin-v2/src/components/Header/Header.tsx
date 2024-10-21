import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-6 px-3 sm:px-4 lg:px-6 flex items-center justify-between">
        <button 
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-gray-900 hover:text-gray-700 transition duration-150 ease-in-out">
          Shoshin Trading Journal
        </Link>
        <div className="w-6"></div>
      </div>
    </header>
  );
};

export default Header;
