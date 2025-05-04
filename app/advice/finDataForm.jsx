"use client";
import { createFinDataProfile } from "@/lib/actions/finData.actions";
import { periodTypes, incomePeriodDefault } from "@/app/constants";
import { getLocalDateString } from "@/lib/util/datefunct";
import { useState, useEffect } from "react";
import { match } from "assert";
export default function InitialSurvey({ jobs = [] }) {
  const updateSpendingData = () => {
    // update statedata
  };
  const saveSpendingData = () => {
    // update db with spending data
  };
  const [form, setForm] = useState({
    rent: 0,
    goalAmount:100,
    unemployed: false,
    jobName: "",
    payPeriod: incomePeriodDefault,
    amountperPayPeriod: 0,
    amountperHour: 0,
    hoursPerPeriod: 0,
    startDate: getLocalDateString(),
    endDate: "",
    recurringEnd: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // console.log(name, value, type, checked)
    console.log(name, value, type, checked);
    setForm((prev) => {
      const newData = {
        ...prev,
        [name]:
          type === "checkbox"
            ? checked
            : type === "number"
            ? Number(value)
            : value,
      };
      if(name ==="hoursPerPeriod" || name ==="amountperHour" ){
        if (Number(newData.amountperHour)>0 && Number(newData.hoursPerPeriod)>0){
          newData.amountperPayPeriod = (Number(newData.amountperHour)*100*Number(newData.hoursPerPeriod))/100
        }
      }
      if(name ==="amountperPayPeriod" ){
        if ( Number(newData.hoursPerPeriod)>0){
          newData.amountperHour = ((Number(newData.amountperPayPeriod)*100/Number(newData.hoursPerPeriod))/100).toFixed(2)
        }
      }
      switch (
        name
        // case "hoursPerPeriod":
        //   if (newData.amountperHour && Number(newData.hoursPerPeriod)>0){
        //     newData.amountperPayPeriod=newData.amountperHour*newData.amountperHour
        //   }
        // case "amountperHour":
        //   if (newData.hoursPerPeriod){
        //     newData.amountperPayPeriod=newData.amountperHour*newData.amountperHour
        //   }
        // case "amountperPayPeriod":
        //   if (newData.hoursPerPeriod){
        //     newData.amountperHour=(newData.amountperPayPeriod/newData.hoursPerPeriod).toFixed(2)
        //   }
      ) {
      }
      console.log(name, newData);
      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      rent: form.rent,
      // unemployed:form.unemployed,
      jobName: form.jobName,
      payPeriod: parseInt(form.payPeriod),
      hoursPerPeriod: form.hoursPerPeriod,
      amountperPayPeriod: form.amountperPayPeriod,
      amountperHour: form.amountperHour,
      startDate: form.startDate,
      recurringEnd: "",
      endDate: form.startDate,
      updated: new Date().toISOString(),
    };
    console.log("Submitted data:", payload);
    let added = await createFinDataProfile(payload);
    console.log(added);
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
        <div className="form-set">
          <label>Saving Goals</label>
          <input
            type="number"
            name="goal"
            value={form.goal}
            onChange={handleChange}
            className="adv-input"
          />
        </div>
        <div className="form-button-set">
          <button type="clear" className="submit-button">
            Clear
          </button>
          <button type="submit" className="submit-button">
            Update Financial Data
          </button>
        </div>
      </form>
    </div>
  );
}
