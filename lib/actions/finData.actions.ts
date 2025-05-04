"use server";

import finData from "@/lib/modals/finData.modal";
import finDataJob from "@/lib/modals/finDataJob.modal";
import finDataSpending from "@/lib/modals/finDataSpending.modal";
import finDataIncome from "@/lib/modals/finDataIncome.modal";
import User from "@/lib/modals/user.modal";
import connect from "@/lib/db";
import { getUserID } from "./user.actions";

export async function createFinDataProfile(data: any) {
  try {
    data.user = await getUserID()
    console.log(data)
    await connect();
    const newData = await finData.create(data);
    const newJobData = await finDataJob.create(data);

    const newfindata= JSON.parse(JSON.stringify(newData));
    const newfindatajob= JSON.parse(JSON.stringify(newJobData));
    console.log(newfindata)
    console.log(newfindatajob)
    return {...newfindata,...newfindatajob}

  } catch (error) {
    console.log(error);
  }
}

// export async function update(data: any) {
//   try {
//     await connect();
//     const newData = await finData.updateOne(data);
//     return JSON.parse(JSON.stringify(newData));
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function addSpending(data: any) {
  try {
    data.user=await getUserID()
    await connect();
    const newData = await finDataSpending.create(data);
    console.log(newData)
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}

export async function addIncome(data: any) {
  try {
    data.user=await getUserID()
    await connect();
    const newData = await finDataIncome.create(data);
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}