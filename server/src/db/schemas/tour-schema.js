import mongoose from "mongoose";
const { Schema } = mongoose;

const TourSchema = new Schema(
  {
    mainURL: {
      type: String,
    },
    subURL: {
      type: String,
    },
    mood: {
      type: String,
    },
  },
  {
    collection: "about",
    timestamps: true,
  }
);

export { TourSchema };
