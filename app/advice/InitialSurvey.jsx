"use client";
import { addIncome } from "@/lib/actions/finData.actions";
import { periodTypes, periodDefault } from "@/app/constants";
import { useState, useEffect } from "react";
export default function InitialSurvey({ jobs = [] }) {
  const updateSpendingData = () => {
    // update statedata
  };
  const saveSpendingData = () => {
    // update db with spending data
  };
  const [form, setForm] = useState({
    rent: 0,
    unemployed: false,
    jobName: "",
    payPeriod: 0,
    hoursPerPeriod: 0,
    startDate: new Date().toISOString().slice(0, 10),
    recurringEnd: "",
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
      rent: form.rent,
      jobName: form.jobName,
      payPeriod: parseInt(form.payPeriod),
      hoursPerPeriod: form.hoursPerPeriod,
      startDate: form.startDate,
      recurringEnd: "",
      updated: new Date().toISOString(),
    };
    console.log("Submitted data:", payload);
    let added = addIncome(payload);
    // Send to API or save to state/storage
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">Lets start Tracking</h2>
        <div className="form-set">
          <label>Rent</label>
          <input
            type="number"
            name="rent"
            value={form.rent}
            onChange={handleChange}
            className="adv-input"
          />
        </div>
        {!form.unemployed && (
          <>
            <div className="form-set">
              <label>Job</label>
              <input
                // id="name"
                type="text"
                name="jobName"
                value={form.jobName}
                onChange={handleChange}
                className="adv-input"
              />
            </div>

            <div className="form-set">
              <label>Period</label>
              <select
                name="payPeriod"
                value={form.payPeriod}
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
            {form.payperiod > 1 && (
              <div className="form-set">
                <label>Rent</label>
                <input
                  type="hoursPerPeriod"
                  name="rent"
                  value={form.hoursPerPeriod}
                  onChange={handleChange}
                  className="adv-input"
                />
              </div>
            )}
            <div className="form-set">
              <label>Date Start</label>
              <input
                type="date"
                name="recurring"
                value={form.recurringStart}
                onChange={handleChange}
                className="adv-checkbox"
              />
            </div>
            <div className="form-set">
              <label>Date End</label>
              <input
                type="date"
                name="recurring"
                value={form.recurringEnd}
                onChange={handleChange}
                className="adv-checkbox"
              />
            </div>
          </>
        )}
        <div className="form-set">
          <label>Unemployed</label>
          <input
            type="checkbox"
            name="unemployed"
            checked={form.unemployed}
            onChange={handleChange}
            className="adv-checkbox"
          />
        </div>
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
