'use client';

import { useUser } from '@clerk/nextjs';
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Home() {

  return (
    <div className="flex min-h-screen bg-white relative">
      {/* UserButton placed in top-right of full screen */}
      <SignedIn>
        <div className="absolute top-4 right-4">
          <UserButton />
        </div>
      </SignedIn>

      <main className="flex-1 ml-20 p-10">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome Back, {useUser?.firstName || useUser?.username || 'User'}!
        </h1>

        <div className="p-4 flex gap-20">
          <SignedOut>
            <SignInButton>
              <button className="bg-white text-black px-12 py-4 rounded-lg font-medium hover:bg-gray-100 transition text-xl shadow-md">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-white text-black px-12 py-4 rounded-lg font-medium hover:bg-gray-100 transition text-xl shadow-md">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      </main>
    </div>
  );
}
