
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import { HomeIcon, CurrencyDollarIcon, ChartBarIcon, BookOpenIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { UserButton, useUser } from '@clerk/nextjs';

const navigation = [
  { name: 'Home', icon: HomeIcon, href: '/' },
  { name: 'Transactions', icon: CurrencyDollarIcon, href: '#' },
  { name: 'Analytics', icon: ChartBarIcon, href: '#' },
  { name: 'Budget', icon: BookOpenIcon, href: '#' },
  { name: 'Settings', icon: Cog6ToothIcon, href: '#' },
];

export default function Sidebar({ isOpen, onToggle }) {
  const { user } = useUser();

  return (
    <div className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center justify-between mb-8">
          {isOpen ? (
            <Image src="/logo_b.png" alt="Logo" width={160} height={40} className="object-contain" />
          ) : (
            <Image src="/icon.png" alt="Logo" width={40} height={40} className="object-contain" />
          )}
          <button onClick={onToggle} className="p-2 hover:bg-gray-100 rounded-lg">
            {isOpen ? (
              <ChevronDoubleLeftIcon className="w-6 h-6 text-gray-600" />
            ) : (
              <ChevronDoubleRightIcon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg hover:bg-blue-50 ${
                    isOpen ? 'justify-start space-x-3' : 'justify-center'
                  }`}
                >
                  <item.icon className="w-6 h-6 text-gray-600" />
                  {isOpen && <span className="text-gray-800">{item.name}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
