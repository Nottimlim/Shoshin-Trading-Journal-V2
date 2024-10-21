import React, { useState } from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition duration-200 ease-in-out md:relative md:translate-x-0`}
      >
        <nav>
          <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Dashboard
          </Link>
          <Link href="/trades" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Trades
          </Link>
          <Link href="/journal" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Journal
          </Link>
          <Link href="/analytics" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            Analytics
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Shoshin Trading Journal</h1>
            <button 
              onClick={toggleSidebar}
              className="md:hidden bg-gray-800 text-white p-2 rounded-md"
            >
              {sidebarOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </header>
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
