'use client';

import { useUser } from '@clerk/nextjs';

export default function Home() {
  const { user } = useUser();

  return (
    <div className="flex min-h-screen bg-white">
      <main className="flex-1 ml-20 p-10">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome Back, {user?.firstName || user?.username || 'User'}!
        </h1>
      </main>
    </div>
  );
}
