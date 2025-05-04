"use client";
import Image from "next/image";
import { addSpending } from "@/lib/actions/finData.actions";
import { getLocalDateString } from "@/lib/util/datefunct";
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
    spendingName: "",
    amount: "",
    recurring: false,
    need: true,
    period: 1,
    spendingType: "one time purchase",
    recurringStart: getLocalDateString(),
    recurringEnd: "",
    wantLevel: 0,
  });

  const handleChange = (e) => {
    console.log(form);
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = form
    // {
    //   spendingName: form.spendingName,
    //   amount: parseFloat(form.amount),
    //   recurring: form.recurring,
    //   period: parseInt(form.period),
    //   spendingType: form.spendingType,
    //   recurringStart: form.recurringStart,
    //   recurringEnd: form.recurringEnd,
    //   need: true,
    //   wantLevel: parseInt(form.wantLevel),
    //   updated: new Date().toISOString(),
    // };
    if (form.need) form.wantLevel = 10;
    if (!form.recurring) {
      form.period = periodDefault;
      form.spendingType = spendingTypeDefault;
    }
    let added = await addSpending(payload);
    console.log("Submitted data:", payload,added);
    // Send to API or save to state/storage
  };

  return (
    <div className="format">
      {/* <div className="absolute top-0 left-0 p-4">
        <Image
          src="/logo_b.png"
          alt="Logo"
          width={200}
          height={50}
          className="object-contain"
        />
      </div> */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Add Spending</h2>

          <div className="form-set">
            <label>spendingName</label>
            <input
              type="text"
              name="spendingName"
              value={form.spendingName}
              onChange={handleChange}
              className="adv-input"
            />
          </div>

          <div className="form-set">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              value={Number(form.amount).toString()}
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
          <div className="form-set">
            <label>Type</label>
            <select
              name="spendingType"
              value={form.spendingType}
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
          {!form.need && (
            <div className="form-set">
              <label>Want Level (1-5)</label>
              <input
                type="number"
                name="wantLevel"
                value={Number(form.wantLevel).toString()}
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
              Clear
            </button>
            <button type="submit" className="submit-button">
              Add Spending
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
