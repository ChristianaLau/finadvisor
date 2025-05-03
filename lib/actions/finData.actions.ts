"use server";

import finData from "@/lib/modals/finData.modal";
import finDataJob from "@/lib/modals/finDataJob.modal";
import User from "@/lib/modals/user.modal";
import connect from "@/lib/db";
import { currentUser ,auth} from '@clerk/nextjs/server'

export async function createFinDataProfile(data: any) {
  try {
    // let curruser=await currentUser()
    const { userId } = await auth();
    console.log(userId)
    const user = await User.findOne({ clerkId: userId });
    console.log(user)
    data.user=user?._id
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