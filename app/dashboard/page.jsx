"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { getAllFinData } from "@/lib/actions/finData.actions";
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryBar,
  VictoryTheme,
  VictoryPie,
} from "victory";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PopUpModal from "@/app/components/PopUpModal";
import TransactionForm from "../components/TransactionForm";

const ProgressBar = ({ goal, current }) => {
  const progress = (current / goal) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-6">
      <div
        className="bg-blue-500 h-full rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default function Home() {
  const { user } = useUser();
  const [finData, setFinData] = useState({});
  const spending = 150;
  const budget = 2150;
  const goalAmount = 3000;
  const savedAmount = 1000;
  const income = 2000;
  const totalExpenses = 1500;

  const spendingByCategory = [
    { category: "Rent", amount: 800 },
    { category: "Groceries", amount: 200 },
    { category: "Transportation", amount: 100 },
    { category: "Miscellaneous", amount: 400 },
  ];

  const pieChartData = [
    { x: "Saved", y: savedAmount },
    { x: "Remaining", y: goalAmount - savedAmount },
  ];
  useEffect(() => {
    async function getdata() {
      let findata = await getAllFinData();
      console.log(findata);
      setFinData(findata);
    }
    getdata();
  }, []);
  return (
    <div className="flex min-h-screen bg-white relative flex-col items-center">
      <SignedIn>
        <div className="absolute top-4 right-4 z-20">
          <UserButton />
        </div>
      </SignedIn>

      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Blue background"
          layout="fill"
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      <div className="absolute top-0 left-0 p-4">
        <Image
          src="/logo_b.png"
          alt="Logo"
          width={200}
          height={50}
          className="object-contain"
        />
      </div>
      <main className="flex-1 p-10 w-full z-10">
        <div className="max-w-7xl mx-auto">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-[1200px] bg-white rounded-lg shadow-md p-12 mt-40">
              <h1 className="text-5xl font-bold text-gray-800">
                Welcome Back, {user?.firstName || user?.username || "User"}!
              </h1>
              <p className="text-2xl text-gray-800 mt-4">
                As of May 1, 2025, {user?.firstName || user?.username || "User"}{" "}
                Catson maintains a modest but stable financial situation. Their
                monthly income totals $2,000, primarily from part-time remote
                work in digital marketing and occasional freelance illustration
                gigs.
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-10 mt-10 w-full">
            <div className="w-[400px] bg-white rounded-lg shadow-md p-12">
              <h1 className="text-2xl text-gray-800 font-bold text-center">
                Today's Spending
              </h1>
              <h1 className="text-4xl text-gray-800 font-bold text-center mt-5">
                ${spending}
              </h1>
            </div>
            <div className="w-[400px] bg-white rounded-lg shadow-md p-12">
              <h1 className="text-2xl text-gray-800 font-bold text-center">
                Remaining Budget
              </h1>
              <h1 className="text-4xl text-gray-800 font-bold text-center mt-5">
                ${budget}
              </h1>
            </div>
            <div className="w-[400px] bg-white rounded-lg shadow-md p-12">
              <h1 className="text-2xl text-gray-800 font-bold text-center">
                This Month's Goal
              </h1>
              <h1 className="text-3xl text-gray-800 font-bold text-center mt-2">
                ${goalAmount}
              </h1>
              <ProgressBar goal={goalAmount} current={savedAmount} />
              <h2 className="text-xl text-gray-600 mt-2">
                Saved: ${savedAmount} out of ${goalAmount}
              </h2>
            </div>
          </div>
          <div className="flex justify-center space-x-10 mt-10 w-full">
            <div className="w-[600px] bg-white rounded-lg shadow-md p-12">
              <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">
                Recent Transactions
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-800">
                  <span>Grocery Shopping</span>
                  <span>- $50</span>
                </div>
                <div className="flex justify-between text-gray-800">
                  <span>Rent Payment</span>
                  <span>- $800</span>
                </div>
                <div className="flex justify-between text-gray-800">
                  <span>Freelance Work</span>
                  <span>+ $500</span>
                </div>
              </div>
            </div>

            <div className="w-[600px] bg-white rounded-lg shadow-md p-12 mt-10">
              <h1 className="text-2xl text-gray-800 font-bold text-center">
                Income vs. Expenses
              </h1>
              <PopUpModal>
                <TransactionForm></TransactionForm>
              </PopUpModal>
              <div className="flex justify-between text-gray-800 mt-4">
                <span>Income</span>
                <span>+ ${income}</span>
              </div>
              <div className="flex justify-between text-gray-800 mt-2">
                <span>Expenses</span>
                <span>- ${totalExpenses}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-10 mt-10 w-full">
            <div className="w-[600px] bg-white rounded-lg shadow-md p-12">
              <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">
                Total Amount in Account
              </h2>
              <VictoryChart
                domainPadding={20}
                padding={{ top: 40, bottom: 60, left: 60, right: 40 }}
              >
                <VictoryAxis
                  tickValues={[1, 2, 3, 4, 5]}
                  tickFormat={["Jan", "Feb", "Mar", "Apr", "May"]}
                  style={{
                    tickLabels: { fontSize: 12, padding: 10 },
                    axis: { stroke: "#cbd5e0" },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={(x) => `$${x / 1000}k`}
                  style={{
                    tickLabels: { fontSize: 12, padding: 10 },
                    axis: { stroke: "#cbd5e0" },
                  }}
                />
                <VictoryLine
                  data={[
                    { x: 1, y: 4000 },
                    { x: 2, y: 7200 },
                    { x: 3, y: 3800 },
                    { x: 4, y: 8900 },
                    { x: 5, y: 9500 },
                  ]}
                  style={{
                    data: { stroke: "#6ce5e8", strokeWidth: 3 },
                    parent: { border: "1px solid #ccc" },
                  }}
                />
              </VictoryChart>
            </div>

            <div className="w-[600px] bg-white rounded-lg shadow-md p-12">
              <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">
                Amount Spent by Category
              </h2>
              <VictoryChart
                domainPadding={20}
                padding={{ top: 40, bottom: 60, left: 60, right: 40 }}
              >
                <VictoryAxis
                  tickFormat={(x) => spendingByCategory[x]?.category}
                  style={{
                    tickLabels: { fontSize: 12, padding: 10 },
                    axis: { stroke: "#cbd5e0" },
                  }}
                />
                <VictoryBar
                  data={spendingByCategory}
                  x="category"
                  y="amount"
                  style={{
                    data: { fill: "#4c51bf" },
                    parent: { border: "1px solid #ccc" },
                  }}
                />
              </VictoryChart>
            </div>
          </div>

          <div className="flex justify-center mt-10 w-full">
            <div className="w-[700px] bg-white rounded-lg shadow-md p-12">
              <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">
                Total Amount Saved to Goal
              </h2>
              <VictoryPie
                data={pieChartData}
                colorScale={["#4c51bf", "#e2e8f0"]}
                style={{
                  labels: { fontSize: 16, fill: "#333" },
                }}
                labelRadius={50}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
