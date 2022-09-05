import mongoose from "mongoose";
const {Schema} = mongoose;

const TourSchema = new Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    description: {
      type: String,
    },

    imgURL: {
      type: String,
    },
    category: {
      type: [String],
    },
  },
  {
    collection: "tourAttraction",
    timestamps: true,
  }
);

export {TourSchema};
