import { Schema, model } from "mongoose";

const recruiterProfileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    department: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const RecruiterProfile = model("RecruiterProfile", recruiterProfileSchema);

export default RecruiterProfile;
