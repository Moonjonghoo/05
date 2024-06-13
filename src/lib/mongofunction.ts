"use server";
import { revalidatePath } from "next/cache";
import connectDB from "./db";
import { User } from "./model";

export async function fetchUser() {
  connectDB();
  const user = await User.find({});
  return user;
}

export async function fetchUserById(id: string) {
  connectDB();
  await User.findByIdAndUpdate(id, {
    name: "수정됨!",
    email: "11@gmail.com",
    gender: "female",
  });
  revalidatePath("/");
}

export async function addUser(prevState: string, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const gender = formData.get("gender");
  connectDB();
  if (email === "" || name === "" || gender === "") return "잘못됨";

  const newUser = new User({
    name,
    email,
    gender,
  });
  newUser.save();
  revalidatePath("/");

  return "추가됨";
}

export async function deleteUser(id: string) {
  connectDB();
  await User.findByIdAndDelete(id);
  revalidatePath("/");
}
