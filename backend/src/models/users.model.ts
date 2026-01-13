import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt, { type SignOptions } from "jsonwebtoken";
import { type StringValue } from "ms";

enum Roles {
  Candidate = "candidate",
  Recruiter = "recruiter",
  Owner = "owner",
  Admin = "admin",
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    photo: {
      type: Schema.Types.ObjectId,
      ref: "File",
    },
    role: {
      type: String,
      enum: Object.values(Roles),
      default: Roles.Candidate,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    accessToken: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  // Hash password before saving to the database
  if (this.isModified("password")) {
    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
  }
});

userSchema.methods.comparePassword = async function (inputPassword: string) {
  return bcrypt.compare(inputPassword, this.password);
};

userSchema.methods.generateAuthToken = async function () {
  const accessExpiresIn: StringValue = (process.env.JWT_EXPIRY ??
    "1d") as StringValue;
  const refreshExpiresIn: StringValue = (process.env.JWT_REFRESH_EXPIRY ??
    "7d") as StringValue;

  const accessOpts: SignOptions = { expiresIn: accessExpiresIn };
  const refreshOpts: SignOptions = { expiresIn: refreshExpiresIn };

  const accessSecret = String(process.env.JWT_SECRET);
  const refreshSecret = String(process.env.JWT_REFRESH_SECRET);

  const accessToken = jwt.sign(
    { id: this._id, role: this.role },
    accessSecret,
    accessOpts
  );

  const refreshToken = jwt.sign({ id: this._id }, refreshSecret, refreshOpts);

  this.accessToken = accessToken;
  this.refreshToken = refreshToken;

  await this.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

userSchema.virtual("profile", {
  ref: (doc: { role: Roles }) => {
    if (doc.role === Roles.Candidate) return "CandidateProfile";
    if (doc.role === Roles.Recruiter) return "RecruiterProfile";
    return null;
  },
  foreignField: "userId",
  localField: "_id",
  justOne: true,
});

userSchema.methods.toJSON = function () {
  const { ...obj } = this.toObject();
  delete obj.password;
  delete obj.__v;
  return obj;
};

const User = model("User", userSchema);

interface UserMethods {
  comparePassword(password: string): Promise<boolean>;
  toJSON(): Omit<Record<string, unknown>, "password" | "__v">;
  generateAuthTokens(): Promise<{ accessToken: string; refreshToken: string }>;
}

export type { Roles, UserMethods };

export default User;
