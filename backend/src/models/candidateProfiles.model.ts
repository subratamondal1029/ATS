import { Schema, model } from "mongoose";

const candidateProfileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    resume: {
      type: Schema.Types.ObjectId,
      ref: "File",
    },
    skills: [
      {
        type: String,
        trim: true,
      },
    ],
    experience: {
      type: Number, // in years if int or months if float
      default: 0,
    },
    education: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    jobPreferences: {
      location: {
        type: String,
        trim: true,
      },
      workMode: {
        type: String,
        enum: ["remote", "onsite", "hybrid"],
      },
      ctcExpectation: {
        type: Number,
        min: 0,
      },
    },
  },
  { timestamps: true }
);

const CandidateProfile = model("CandidateProfile", candidateProfileSchema);

export default CandidateProfile;
