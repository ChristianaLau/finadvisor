import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from "next/image";

const Page = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <Image
        src="/blue_background.png"
        alt="Blue background"
        fill
        className="object-cover -z-10"
        quality={100}
        priority
      />
      
      {/* Logo in top-left corner */}
      <div className="absolute top-0 left-0 p-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={300} 
          height={150} 
          className="object-contain"
        />
      </div>

      {/* Auth Buttons - Top Right */}
      <div className="absolute top-160 left-52 p-4 flex gap-20">
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
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      {/* Woman with phone image */}
      <div className="absolute top-50 right-50 p-4">
        <Image
          src="/woman_phone.png"
          alt="woman"
          width={400} 
          height={850} 
          className="object-contain"
        />
      </div>

      <div className="relative z-10 top-60 left-30 container mx-auto px-4 py-20 text-left">
        <h1 className="text-8xl font-bold text-white mb-6">Plan Smarter,</h1>
        <h2 className="text-8xl font-bold text-white mb-6">Live Better.</h2>
      </div>

      <div className="relative z-10 top-180 left-0 container mx-auto px-4 py-20 text-left">
        <h1 className="text-8xl font-bold text-black mb-6">Revolutionize Your Spending</h1>
        <p className="text-5xl font-bold text-black mb-6">Today.</p>
        <ul className="text-3xl relative top-10 space-y-4"><li>See exactly how much you make</li>

        <li>Know where every dollar goes</li>

        <li>Auto-calculate taxes with W-2 or manual input</li>

        <li>Categorize and break down expenses</li>

        <li>Instantly know how much you’re saving</li>
</ul>
      </div>


      <div className="absolute z-10 top-430 left-20 container mx-auto px-4 py-20 text-left">
        <h1 className="text-8xl font-bold text-black mb-6"> Smarter Choices, Bigger Savings</h1>
        <p className="text-5xl font-bold text-black mb-6">Today.</p>
        <ul className="text-3xl relative top-10 space-y-4">  <li>Set goals and track your progress</li>
  <li>Get tips based on your goals</li>
  <li>Spot habits that hurt your savings</li>
  <li>Understand where your money goes</li>
  <li>Separate needs from wants</li>
</ul>
      </div>

      <div className="absolute top-340 right-50 p-4">
        <Image
          src="/linegraph.jpg"
          alt="graph"
          width={700} 
          height={1600} 
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Page;