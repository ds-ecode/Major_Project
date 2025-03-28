const mongoose = require("mongoose");

const medicalSchema = new mongoose.Schema(
  {
    Userid: {
      type: Number,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    Doctor: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    Category: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Medical", medicalSchema);
