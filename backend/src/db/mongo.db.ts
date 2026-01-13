import mongoose from "mongoose";

const PROJECT_NAME = process.env.PROJECT_NAME || "ATS";

const MONGO_URI =
  process.env.MONGO_URI || `mongodb://localhost:27017/${PROJECT_NAME}`;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log(
      "MongoDB connected successfully at " + connection.connection.name
    );
  } catch (error) {
    throw new Error("Database connection failed: " + error);
  }
};

export default connectDB;
