import { connect, connection } from "mongoose";

const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URL || "");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
