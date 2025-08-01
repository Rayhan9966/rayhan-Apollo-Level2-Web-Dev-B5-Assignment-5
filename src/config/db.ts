import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.DB_URL as string);
  console.log("✅ MongoDB connected");
};
