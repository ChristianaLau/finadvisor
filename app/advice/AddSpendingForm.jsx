"use client";

import { addSpending } from "@/lib/actions/finData.actions";
import {
  periodTypes,
  periodDefault,
  spendingType,
  spendingTypeDefault,
} from "@/app/constants";
import { useState } from "react";
export default function AddSpendingForm() {
  const updateSpendingData = () => {
    // update statedata
  };
  const saveSpendingData = () => {
    // update db with spending data
  };
  const [form, setForm] = useState({
    name: "",
    amount: "",
    recurring: false,
    period: "one time",
    type: "one time purchase",
    wantLevel: 0,
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
      name: form.name,
      amount: parseFloat(form.amount),
      recurring: form.recurring,
      period: parseInt(form.period),
      type: form.type,
      need: true,
      wantLevel: parseInt(form.wantLevel),
      updated: new Date().toISOString(),
    };
    if (form.need) form.wantLevel = 0;
    if (!form.recurring) {
      form.period = periodDefault;
      form.type = spendingTypeDefault;
    }
    console.log("Submitted data:", payload);
    // Send to API or save to state/storage
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">Add Spending</h2>

        <div className="form-set">
          <label>Name</label>
          <input
            // id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="adv-input"
          />
        </div>

        <div className="form-set">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="adv-input"
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
        {form.recurring && (
          <>
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
              <label>Type</label>
              <select
                name="period"
                value={form.period}
                onChange={handleChange}
                required
                className="adv-input"
              >
                {spendingType.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
        <div className="form-set">
          <label>Need?</label>
          <input
            type="checkbox"
            name="need"
            checked={form.need}
            onChange={handleChange}
            className="adv-checkbox"
          />
        </div>
        {form.need && (
          <div className="form-set">
            <label>Want Level (1-5)</label>
            <input
              type="number"
              name="wantLevel"
              value={form.wantLevel}
              onChange={handleChange}
              className="adv-input"
              min="0"
              max="5"
              step="1"
            />
          </div>
        )}
        <div className="form-button-set">
          <button type="clear" className="submit-button">
            clear
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
