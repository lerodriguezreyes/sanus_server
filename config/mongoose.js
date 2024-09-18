import mongoose from "mongoose";

export default async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to database name: ${connection.connections[0].name}! 🫡`);
  } catch (error) {
    console.log(error);
  }
}