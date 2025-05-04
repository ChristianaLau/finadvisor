'use client';

import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from "next/image";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryBar, VictoryTheme } from 'victory';
import { motion } from "framer-motion";

const financialData = [
  { quarter: 'Q1', earnings: 18500, expenses: 12200, profit: 6300 },
  { quarter: 'Q2', earnings: 22400, expenses: 15800, profit: 6600 },
  { quarter: 'Q3', earnings: 19800, expenses: 14500, profit: 5300 },
  { quarter: 'Q4', earnings: 26500, expenses: 18200, profit: 8300 }
];

const Page = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/blue_background.png"
        alt="Blue background"
        fill
        className="object-cover -z-10"
        quality={100}
        priority
      />

      <div className="absolute top-0 left-0 p-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={300}
          height={150}
          className="object-contain"
        />
      </div>

      <motion.div
        className="absolute top-150 left-52 p-4 flex gap-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
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
          <UserButton />
        </SignedIn>
      </motion.div>

      {/*Updated: Woman image now scroll-animated */}
      <motion.div
        className="absolute top-50 right-50 p-4"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/woman_phone.png"
          alt="woman"
          width={400}
          height={850}
          className="object-contain"
        />
      </motion.div>

      {/* Updated: Hero text now scroll-animated */}
      <motion.div
        className="relative z-10 top-60 left-30 container mx-auto px-4 py-20 text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-8xl font-bold text-white mb-6">Plan Smarter,</h1>
        <h2 className="text-8xl font-bold text-white mb-6">Live Better.</h2>
      </motion.div>

      <div className="relative z-10 top-200 left-0 container mx-auto px-4 py-20 text-left">
        <h1 className="text-8xl font-bold text-black mb-6">Revolutionize Your Spending</h1>
        <p className="text-5xl font-bold text-black mb-6">Today.</p>
        <ul className="text-3xl relative top-20 space-y-4">
          <li>See exactly how much you make</li>
          <li>Know where every dollar goes</li>
          <li>Auto-calculate taxes with W-2 or manual input</li>
          <li>Categorize and break down expenses</li>
          <li>Instantly know how much you’re saving</li>
        </ul>
      </div>

      {/* ✅ Smarter Choices animated */}
      <motion.div
        className="absolute z-10 top-530 left-20 container mx-auto px-4 py-20 text-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-8xl font-bold text-black mb-6">Smarter Choices, Bigger Savings</h1>
        <p className="text-5xl font-bold text-black mb-6">Today.</p>
        <ul className="text-3xl relative top-20 space-y-4">
          <li>Set goals and track your progress</li>
          <li>Get tips based on your goals</li>
          <li>Spot habits that hurt your savings</li>
          <li>Understand where your money goes</li>
          <li>Separate needs from wants</li>
        </ul>
      </motion.div>

      {/* Chart animated */}
      <motion.div
        className="absolute top-600 right-70 p-6 w-[500px] bg-white rounded-lg shadow-xl flex flex-col"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 30 }}>
          <VictoryAxis
            tickFormat={["Q1", "Q2", "Q3", "Q4"]}
            style={{
              tickLabels: { fontSize: 12, padding: 5, fill: "#4b5563" },
              axis: { stroke: "#e5e7eb" }
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => `$${x / 1000}k`}
            style={{
              tickLabels: { fontSize: 12, fill: "#4b5563" },
              axis: { stroke: "#e5e7eb" },
              grid: { stroke: "#f3f4f6" }
            }}
          />
          <VictoryBar
            data={financialData}
            x="quarter"
            y="earnings"
            style={{ data: { fill: "#8b5cf6", width: 20 } }}
            cornerRadius={{ top: 5 }}
          />
          <VictoryBar
            data={financialData}
            x="quarter"
            y="expenses"
            style={{ data: { fill: "#ef4444", width: 20 } }}
            cornerRadius={{ top: 5 }}
          />
          <VictoryBar
            data={financialData}
            x="quarter"
            y="profit"
            style={{ data: { fill: "#10b981", width: 20 } }}
            cornerRadius={{ top: 5 }}
          />
        </VictoryChart>

        <div className="flex justify-center mt-4 space-x-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#8b5cf6] mr-2 rounded-sm"></div>
            <span className="text-sm">Earnings</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#ef4444] mr-2 rounded-sm"></div>
            <span className="text-sm">Expenses</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#10b981] mr-2 rounded-sm"></div>
            <span className="text-sm">Profit</span>
          </div>
        </div>
      </motion.div>

      {/* Team section animated */}
      <div className="absolute z-10 top-800 left-0 right-0 text-center px-4 py-20">
        <h1 className="text-8xl font-bold text-black mb-6">Us, Our Mission</h1>
        <div className="flex justify-center gap-20 mt-30">
          {["Christiana", "Kyaw", "Cody"].map((name, index) => (
            <motion.div
              key={name}
              className="w-[300px] bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <img src="/woman_phone.png" alt="Woman on phone" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <p className="text-gray-600">Placeholder Text</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute w-full bg-gray-200 py-6 px-4 top-1000 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h3>
        <p className="text-gray-700">Email: Finadvisor@gmail.com | Phone: (123) 456-7890</p>
        <p className="text-gray-600 mt-2 text-sm">© 2025 Finadvisor. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Page;
