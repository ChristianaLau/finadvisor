"use client";
import { addIncome } from "@/lib/actions/finData.actions";
import { periodTypes, periodDefault } from "@/app/constants";
import { useState, useEffect } from "react";
import {getLocalDateString} from "@/lib/util/datefunct";
export default function AddIncomeForm({
  jobs=[]
}) {
  const updateSpendingData = () => {
    // update statedata
  };
  const saveSpendingData = () => {
    // update db with spending data
  };

  
  const [form, setForm] = useState({
    incomeName: "",
    hours: 0,
    amount: 0,
    received: true,
    recurring: false,
    period: periodDefault,
    recurringStart: getLocalDateString(),
    recurringEnd: "",
  });
  useEffect(() => {
    let numjobs = jobs.length;
    if (numjobs > 0) {
      let selectedjob = jobs[0];
      setForm((prev) => ({
        ...prev,
        incomeName: selectedjob?.jobName||"",
        recurring: true,
        period: selectedjob?.payPeriod||periodDefault,
        amount: 0,
        basehours: selectedjob?.hoursPerPeriod||0,
        recurringStart: "",
      }));
    }
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(type,value,typeof(value),Number(value) )
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked :type === "number"? Number(value): value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      incomeName: form.incomeName,
      amount: parseFloat(form.amount),
      recurring: form.recurring,
      period: parseInt(form.period),
      recurringStart: form.recurringStart,
      recurringEnd: form.recurringEnd,
      updated: new Date().toISOString(),
    };
    console.log("Submitted data:", payload);
    let added = addIncome(payload);
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
            value={Number(form.amount).toString()}
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
              <label>Date Start</label>
              <input
                type="date"
                name="recurringStart"
                value={form.recurringStart}
                onChange={handleChange}
                className="adv-checkbox"
              />
            </div>
            <div className="form-set">
              <label>Date End</label>
              <input
                type="date"
                name="recurringEnd"
                value={form.recurringEnd}
                onChange={handleChange}
                className="adv-checkbox"
              />
            </div>
          </>
        )}

        <div className="form-button-set">
          <button type="clear" className="submit-button">
            Clear
          </button>
          <button type="submit" className="submit-button">
            Add Income
          </button>
        </div>
      </form>
    </div>
  );
}
