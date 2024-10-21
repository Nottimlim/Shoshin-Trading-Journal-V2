import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavItem } from '@/types/NavItem';

interface SidebarProps {
  navItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
  const router = useRouter();

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              router.pathname === item.href 
                ? 'bg-gray-700 text-white' 
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
