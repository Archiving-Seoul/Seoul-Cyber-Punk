import mongoose from "mongoose";
const { Schema } = mongoose;

const AboutSchema = new Schema(
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

export { AboutSchema };
