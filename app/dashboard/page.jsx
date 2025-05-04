"use client";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { getAllFinData } from "@/lib/actions/finData.actions";
import { getLocalDateString } from "@/lib/util/datefunct";
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryBar,
  VictoryTheme,
  VictoryPie,
} from "victory";
import Sidebar from "../components/sidebar";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import React, { useEffect, useState } from "react";
import PopUpModal from "@/app/components/PopUpModal";
import TransactionForm from "../components/TransactionForm";
import { off } from "process";
>>>>>>> refs/remotes/origin/main

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

const NewsCard = ({ article }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-bold text-gray-800">{article.title}</h3>
    {article.urlToImage && (
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-40 object-cover rounded mt-2"
      />
    )}
    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
      {article.description}
    </p>
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-sm mt-2 block hover:underline"
    >
      Read more
    </a>
  </div>
);

export default function Home() {
  const { user } = useUser();
  const [finData, setFinData] = useState({});
<<<<<<< HEAD
  const spending = 150;
  const budget = 2150;
  const goalAmount = 3000;
  const savedAmount = 1000;
  const income = 2000;
  const totalExpenses = 1500;

  const transactions = [
    { label: "Grocery Shopping", amount: -50 },
    { label: "Rent Payment", amount: -800 },
    { label: "Freelance Work", amount: 500 }
  ];
=======
  const [transactions, setTransactions] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const budget = 2150;
  const goalAmount = finData?.goalAmount || 3000;
  const income = transactions.reduce((curr, item) => {
    if (!item.spending) {
      return curr + item.amount;
    }
    return curr;
  }, 0);
  const totalExpenses = transactions.reduce((curr, item) => {
    if (item.spending) {
      return curr + item.amount;
    }
    return curr;
  }, 0);
  const savedAmount = income - totalExpenses;
  const spending = transactions.reduce((curr, item) => {
    if (item.spending) {
      let createdAt = new Date(item.createdAt).toLocaleDateString();
      let today = new Date().toLocaleDateString();
      if ((createdAt = today)) {
        return curr + item.amount;
      }
    }
    return curr;
  }, 0);
>>>>>>> refs/remotes/origin/main

  // const spendingByCategory = [
  //   { category: "Rent", amount: 800 },
  //   { category: "Groceries", amount: 200 },
  //   { category: "Transportation", amount: 100 },
  //   { category: "Miscellaneous", amount: 400 },
  // ];

  const pieChartData = [
    { x: "Saved", y: savedAmount },
    { x: "Remaining", y: goalAmount - savedAmount },
  ];

  useEffect(() => {
<<<<<<< HEAD
=======
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=finance&language=en&pageSize=6&apiKey=0204ebe0942043ed9cd81b83b2c13e6e`
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
>>>>>>> refs/remotes/origin/main
    async function getdata() {
      let findata = await getAllFinData();
      console.log(findata);
      setFinData(findata);
<<<<<<< HEAD
=======
      if (findata) {
        const trans = [];
        const incomelist = findata.income || [];
        // console.log(incomelist)
        for (let income of incomelist) {
          income.spending = false;
          income.name = income.incomeName;
          income.category = income.incomeName;
          trans.push(income);
          // console.log(item)
        }
        const spendinglist = findata?.spendingList || [];
        // console.log(spendinglist)
        for (let spending of spendinglist) {
          spending.spending = true;
          spending.name = spending.spendingName;
          spending.category = spending.spendingType;
          trans.push(spending);
          // console.log(item)
        }
        // const incomelist=findata.incomelist
        // console.log(trans);
        setTransactions(trans);
      }
>>>>>>> refs/remotes/origin/main
    }
    getdata();
  }, []);

  return (
    <div className="flex min-h-screen bg-white relative flex-col items-center">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
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
        <div className="flex">
          <main className="flex-1 p-10 w-full z-10">
            <div className="max-w-7xl mx-auto">
              <div className="w-full flex justify-center">
                <div className="w-full md:w-[1200px] bg-white rounded-lg shadow-md p-12 mt-20">
                  <h1 className="text-5xl font-bold text-gray-800">
                    Welcome Back, {user?.firstName || user?.username || "User"}!
                  </h1>
                  <p className="text-2xl text-gray-800 mt-4">
                    As of{" "}
                    {new Date().toLocaleDateString(undefined, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    , {user?.firstName || user?.username || "User"} Catson
                    maintains a modest but stable financial situation. Their
                    monthly income totals $2,000, primarily from part-time
                    remote work in digital marketing and occasional freelance
                    illustration gigs.
                  </p>
                </div>
              </div>

<<<<<<< HEAD
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
                Welcome Back, {user?.firstName || user?.username || 'User'}!
              </h1>
              <p className="text-2xl text-gray-800 mt-4">
                As of May 1, 2025, {user?.firstName || user?.username || 'User'} Catson maintains a modest but stable financial situation. Their monthly income totals $2,000, primarily from part-time remote work in digital marketing and occasional freelance illustration gigs.
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-10 mt-10 w-full">
            <div className="w-[400px] bg-white rounded-lg shadow-md p-12">
              <h1 className="text-2xl text-gray-800 font-bold text-center">Today's Spending</h1>
              <h1 className="text-4xl text-gray-800 font-bold text-center mt-5">${spending}</h1>
            </div>
            <div className="w-[400px] bg-white rounded-lg shadow-md p-12">
              <h1 className="text-2xl text-gray-800 font-bold text-center">Remaining Budget</h1>
              <h1 className="text-4xl text-gray-800 font-bold text-center mt-5">${budget}</h1>
            </div>
            <div className="w-[400px] bg-white rounded-lg shadow-md p-12">
              <h1 className="text-2xl text-gray-800 font-bold text-center">This Month's Goal</h1>
              <h1 className="text-3xl text-gray-800 font-bold text-center mt-2">${goalAmount}</h1>
              <ProgressBar goal={goalAmount} current={savedAmount} />
              <h2 className="text-xl text-gray-600 mt-2">
                Saved: ${savedAmount} out of ${goalAmount}
              </h2>
            </div>
          </div>

          <div className="flex justify-center space-x-10 mt-10 w-full">
            <div className="w-[600px] bg-white rounded-lg shadow-md p-12">
              <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">Recent Transactions</h2>
              <div className="space-y-4">
                {transactions.map((t, idx) => (
                  <div key={idx} className="flex justify-between text-gray-800">
                    <span>{t.label}</span>
                    <span className={t.amount < 0 ? "text-red-500" : "text-green-600"}>
                      {t.amount < 0 ? `- $${Math.abs(t.amount)}` : `+ $${t.amount}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[600px] bg-white rounded-lg shadow-md p-12 mt-10">
              <h1 className="text-2xl text-gray-800 font-bold text-center">Income vs. Expenses</h1>
              <div className="flex justify-between text-gray-800 mt-4">
                <span>Income</span>
                <span className="text-green-600">+ ${income}</span>
              </div>
              <div className="flex justify-between text-gray-800 mt-2">
                <span>Expenses</span>
                <span className="text-red-500">- ${totalExpenses}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-10 mt-10 w-full">
            <div className="w-[600px] bg-white rounded-lg shadow-md p-12">
              <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">Total Amount in Account</h2>
              <VictoryChart domainPadding={20} padding={{ top: 40, bottom: 60, left: 60, right: 40 }}>
                <VictoryAxis
                  tickValues={[1, 2, 3, 4, 5]}
                  tickFormat={["Jan", "Feb", "Mar", "Apr", "May"]}
                  style={{
                    tickLabels: { fontSize: 12, padding: 10 },
                    axis: { stroke: "#cbd5e0" }
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={(x) => `$${x / 1000}k`}
                  style={{
                    tickLabels: { fontSize: 12, padding: 10 },
                    axis: { stroke: "#cbd5e0" }
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
                    parent: { border: "1px solid #ccc" }
                  }}
                />
              </VictoryChart>
            </div>

            <div className="w-[600px] bg-white rounded-lg shadow-md p-12">
              <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">Amount Spent by Category</h2>
              <VictoryChart domainPadding={20} padding={{ top: 40, bottom: 60, left: 60, right: 40 }}>
                <VictoryAxis
                  tickFormat={(x) => spendingByCategory[x]?.category}
                  style={{
                    tickLabels: { fontSize: 12, padding: 10 },
                    axis: { stroke: "#cbd5e0" }
                  }}
                />
                <VictoryBar
                  data={spendingByCategory}
                  x="category"
                  y="amount"
                  style={{
                    data: { fill: "#4c51bf" },
                    parent: { border: "1px solid #ccc" }
                  }}
                />
              </VictoryChart>
            </div>
          </div>

          <div className="flex justify-center mt-10 w-full">
            <div className="w-[700px] bg-white rounded-lg shadow-md p-12">
              <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">Total Amount Saved to Goal</h2>
              <VictoryPie
                data={pieChartData}
                colorScale={["#4c51bf", "#e2e8f0"]}
                style={{
                  labels: { fontSize: 16, fill: "#333" }
                }}
                labelRadius={50}
              />
            </div>
          </div>
=======
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
                <div className="relative w-[600px] bg-white rounded-lg shadow-md p-12">
                  <PopUpModal buttontype="add">
                    <TransactionForm></TransactionForm>
                  </PopUpModal>
                  <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">
                    Recent Transactions
                  </h2>
                  <div className="">
                    <table className="table-auto w-full  ">
                      <thead>
                        <tr className="">
                          <th className="  p-4 text-left">Name</th>
                          <th className="   p-4 text-left">Category</th>
                          <th className="   p-4 text-left">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((item, idx) => (
                          <tr className="" key={idx}>
                            <td className="  p-4">{item.name}</td>
                            <td className="  p-4">{item.category}</td>
                            <td className="flex justify-between text-right p-4">
                              <span className="text-xl">
                                {item.spending ? "-" : "+"}
                              </span>{" "}
                              <span>${item.amount}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* <div className="flex justify-between text-gray-800">
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
                    </div> */}
                  </div>
                </div>

                <div className="relative w-[600px] bg-white rounded-lg shadow-md p-12 mt-10">
                  <h1 className="text-2xl text-gray-800 font-bold text-center">
                    Income vs. Expenses
                  </h1>
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
                      tickFormat={(x) => transactions[x]?.category}
                      style={{
                        tickLabels: { fontSize: 12, padding: 10 },
                        axis: { stroke: "#cbd5e0" },
                      }}
                    />
                    <VictoryBar
                      data={transactions}
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
              <div className="flex justify-center mt-10 w-full">
                <div className="w-full max-w-7xl px-4">
                  <h2 className="text-5xl font-bold text-gray-800 mb-6 mt-20 text-center">
                    Latest Finance News
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles[0] && <NewsCard article={articles[0]} />}
                    {articles[1] && <NewsCard article={articles[1]} />}
                    {articles[2] && <NewsCard article={articles[2]} />}
                    {articles[3] && <NewsCard article={articles[3]} />}
                    {articles[4] && <NewsCard article={articles[4]} />}
                    {articles[5] && <NewsCard article={articles[5]} />}
                  </div>
                </div>
              </div>
            </div>
          </main>
>>>>>>> refs/remotes/origin/main
        </div>
      </div>
    </div>
  );
}