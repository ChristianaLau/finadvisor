"use server";

import User from "@/lib/modals/user.modal";
import connect from "@/lib/db";

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
