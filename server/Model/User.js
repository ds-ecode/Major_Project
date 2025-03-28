const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userid:{type: Number,
        required: true
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["Doctor", "Patient"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    address: {
      type: String,
      required: [false, "Address is required"],
      trim: true,
    },
    telephone: {
      type: String,
      required: [false, "Telephone number is required"],
      match: [/^[0-9]{10}$/, "Please enter a valid 10-digit telephone number"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
