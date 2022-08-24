import mongoose from "mongoose";
const { Schema } = mongoose;
import { CategorySchema } from "./category-schema.js";

const TourSchema = new Schema(
  {
    tourId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    category: [CategorySchema],
  },
  {
    collection: "tourAttraction",
    timestamps: true,
  }
);

export { TourSchema };
