"use client";
import AddSpendingForm from "./AddSpendingForm";
import AddIncomeForm from "./AddIncomeForm";
import { useState } from "react";
import Modal from "./Modal";

export default function TransactionForm() {
  const [showSpending, setShowSpending] = useState(true);

  return (
    <div className="transaction-form">
      <div className="transaction-form-button-container">
        <button onClick={() => setShowSpending(true)} className="custom-button">
          Add Spending
        </button>
        <button
          onClick={() => setShowSpending(false)}
          className="custom-button"
        >
          Add Income
        </button>
      </div>
      <div style={{ display: showSpending ? "" : "none" }}>
        <AddSpendingForm />
      </div>
      <div style={{ display: !showSpending ? "" : "none" }}>
        <AddIncomeForm />
      </div>
    </div>
  );
}
