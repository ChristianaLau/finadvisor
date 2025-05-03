"use client";
import { addIncome } from "@/lib/actions/finData.actions";
import { periodTypes } from "@/app/constants";
import { useState } from "react";
export default function AddIncomeForm() {
  const updateSpendingData = () => {
    // update statedata
  };
  const saveSpendingData = () => {
    // update db with spending data
  };
  const [form, setForm] = useState({
    incomeName: "",
    amount: "",
    received: true,
    recurring: false,
    period: "",
    payType:"",
    recurringStart:"",
    recurringEnd:"",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      incomeName: form.incomeName,
      amount: parseFloat(form.amount),
      recurring: form.recurring,
      period: parseInt(form.period),
      recurringStart:form.recurringStart,
      recurringEnd:form.recurringEnd,
      type: form.type,
      updated: new Date().toISOString(),
    };
    console.log("Submitted data:", payload);
    let added = addIncome(payload)
    // Send to API or save to state/storage
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">Add Income Sources</h2>

        <div className="form-set">
          <label>Income Name</label>
          <input
            // id="name"
            type="text"
            name="incomeName"
            value={form.incomeName}
            onChange={handleChange}
            className="adv-input"
          />
        </div>

        <div className="form-set">
          <label>Income Amount</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="adv-input"
          />
        </div>

      <div className="form-set">
        <label>Received</label>
        <input
          type="checkbox"
          name="received"
          checked={form.received}
          onChange={handleChange}
          className="adv-checkbox"
        />
      </div>

        <div className="form-set">
          <label>Recurring</label>
          <input
            type="checkbox"
            name="recurring"
            checked={form.recurring}
            onChange={handleChange}
            className="adv-checkbox"
          />
        </div>
        {form.recurring&&<>
        <div className="form-set">
          <label>Period</label>
          <select
            name="period"
            value={form.period}
            onChange={handleChange}
            required
            className="adv-input"
          >
            {periodTypes.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-set">
          <label>Date Start</label>
          <input
            type="date"
            name="recurring"
            checked={form.recurringStart}
            onChange={handleChange}
            className="adv-checkbox"
          />
        </div>
        <div className="form-set">
          <label>Date End</label>
          <input
            type="date"
            name="recurring"
            checked={form.recurringEnd}
            onChange={handleChange}
            className="adv-checkbox"
          />
        </div>
        </>
        }

        <div className="form-set">
          <label>Type</label>
          <input
            type="text"
            name="type"
            value={form.type}
            onChange={handleChange}
            className="adv-input"
          />
        </div>

        <div className="form-set">
          <label>Want Level (0-10)</label>
          <input
            type="number"
            name="wantLevel"
            value={form.wantLevel}
            onChange={handleChange}
            className="adv-input"
            min="1"
            max="5"
            step="1"
          />
        </div>

        <div className="form-button-set">
          <button type="clear" className="submit-button">
            clear
          </button>
          <button type="submit" className="submit-button">
            Add Income
          </button>
        </div>
      </form>
    </div>
  );
}
