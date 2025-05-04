"use server";

import User from "@/lib/modals/user.modal";
import connect from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    console.log("New User Created:", newUser); // Log the created user
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error creating user in MongoDB:", error); // More detailed error logging
    throw error; // Re-throw error so you can catch it in the route if needed
  }
}

export const getUserID = async () => {
  try {
    let uid;
    // try {
    const { userId } = await auth();
    uid = userId;
    // } catch (error) {
    //   const cu = await currentUser();
    //   uid = cu?.id;
    // }
    // // console.log(userId);
    await connect();
    const user = await User.findOne({ clerkId: uid });
    console.log(user);
    return user._id;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
