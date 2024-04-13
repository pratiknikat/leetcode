const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  easy: {
    type: Number,
    default: 0,
  },
  medium: {
    type: Number,
    default: 0,
  },
  hard: {
    type: Number,
    default: 0,
  },
  score: {
    type: Number,
    default: 0,
  },
  submission: [
    {
      value: {
        type: Number,
        required: true,
      },
      day: {
        type: String,
        required: true,
      },
    },
  ],
  problems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
    },
  ],
});

module.exports = mongoose.model("Details", detailsSchema);
