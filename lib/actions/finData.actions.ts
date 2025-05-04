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
    data.user = await getUserID();
    console.log(data);
    await connect();
    const newData = await finData.create(data);
    const newJobData = await finDataJob.create(data);

    const newfindata = JSON.parse(JSON.stringify(newData));
    const newfindatajob = JSON.parse(JSON.stringify(newJobData));
    console.log(newfindata);
    console.log(newfindatajob);
    return { ...newfindata, ...newfindatajob };
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
    data.user = await getUserID();
    await connect();
    const newData = await finDataSpending.create(data);
    console.log(newData);
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}

export async function addIncome(data: any) {
  try {
    data.user = await getUserID();
    await connect();
    const newData = await finDataIncome.create(data);
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}

export async function getIncomeSource(userId = undefined) {
  try {
    if (!userId) {
      userId = await getUserID();
    }
    await connect();
    const newData = await finDataIncome.find({ user: userId }).exec();
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}

export async function getSpendingList(userId = undefined) {
  try {
    if (!userId) {
      userId = await getUserID();
    }
    await connect();
    const newData = await finDataSpending.find({ user: userId }).exec();
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}

export async function getfFinProfile(userId = undefined) {
  try {
    if (!userId) {
      userId = await getUserID();
    }
    await connect();
    const newData = await finData.findOne({ user: userId }).exec();
    console.log("fd",newData)
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}

export async function getJobList(userId = undefined) {
  try {
    if (!userId) {
      userId = await getUserID();
    }
    await connect();
    const newData = await finDataJob.find({ user: userId }).exec();
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}

export async function getAllFinData() {
  try {
    console.log(">>>>>>>>>>>>>>>>>>>>>> getAllFinData");
    const userId = await getUserID();
    console.log("userId",userId)
    let finData = await getfFinProfile(userId);
    console.log(finData);
    finData.jobs = await getJobList(userId)||[];
    finData.spendingList = await getSpendingList(userId)||[];
    finData.income = await getIncomeSource(userId)||[];
    return finData;
  } catch (error) {
    console.log(error);
  }
<<<<<<< HEAD
}
=======
}

export async function deleteIncomeSource(userId = undefined) {
  try {
    if (!userId) {
      userId = await getUserID();
    }
    await connect();
    const newData = await finDataIncome.find({ user: userId }).exec();
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}

export async function deleteSpendingList(userId = undefined) {
  try {
    if (!userId) {
      userId = await getUserID();
    }
    await connect();
    const newData = await finDataSpending.find({ user: userId }).exec();
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}

export async function deleteJobList(userId = undefined) {
  try {
    if (!userId) {
      userId = await getUserID();
    }
    await connect();
    const newData = await finDataJob.find({ user: userId }).exec();
    return JSON.parse(JSON.stringify(newData));
  } catch (error) {
    console.log(error);
  }
}
>>>>>>> refs/remotes/origin/main
