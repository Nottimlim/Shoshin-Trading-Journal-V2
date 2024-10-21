import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { href: '/', label: 'Dashboard', icon: '📊' },
    { href: '/trades', label: 'Trades', icon: '💹' },
    { href: '/journal', label: 'Journal', icon: '📓' },
    { href: '/analytics', label: 'Analytics', icon: '📈' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white w-64 min-h-screen p-4 ${isSidebarOpen ? '' : '-ml-64'}`}>
        <div className="flex justify-between items-center mb-6">
          <span className="text-2xl font-semibold">Shoshin</span>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white">
            {isSidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        <nav>
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center py-2.5 px-4 rounded transition duration-200 ${
                router.pathname === item.href 
                  ? 'bg-gray-700 text-white' 
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto py-4 px-4">
            <h1 className="text-2xl font-semibold text-gray-900">Shoshin Trading Journal</h1>
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
