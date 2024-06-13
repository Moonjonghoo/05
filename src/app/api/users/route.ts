import connectDB from "@/lib/db";
import { User } from "@/lib/model";

export async function GET(response: Request) {
  connectDB();
  const user = await User.find({});
  return Response.json(user);
}
