"use server";

import finData from "@/lib/modals/finData.modal";
import connect from "@/lib/db";

export async function addData(data: any) {
  try {
    await connect();
    const newData = await finData.create(data);
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}
export async function update(data: any) {
  try {
    await connect();
    const newData = await finData.updateOne(data);
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}
export async function addSpending(data: any) {
  try {
    await connect();
    const newData = await finData.updateOne(data);
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}
export async function addIncome(data: any) {
  try {
    await connect();
    const newData = await finData.updateOne(data);
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}