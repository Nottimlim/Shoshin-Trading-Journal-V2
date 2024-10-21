import React, { useState } from 'react';
import Head from 'next/head';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Shoshin Trading Journal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Sidebar isOpen={isSidebarOpen} />

      <div 
        id="content" 
        className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <Header toggleSidebar={toggleSidebar} />

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
