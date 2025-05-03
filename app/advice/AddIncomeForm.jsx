import { addIncome } from "@/lib/actions/finData.actions";
import { addSpending } from "@/lib/actions/finData.actions";
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
    name: "",
    amount: "",
    recurring: false,
    period: "",
    type: "",
    wantLevel: "",
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
      wantLevel: parseInt(form.wantLevel),
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
        {form.recurring&&
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
        </div>}

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
            Clear
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
