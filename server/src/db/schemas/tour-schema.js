import mongoose from "mongoose";
const {Schema} = mongoose;
import {CategorySchema} from "./category-schema.js";

const TourSchema = new Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    imgURL: {
      type: String,
      // required: true,
    },
    category: {
      type: Array,
      // required: true,
    },
  },
  {
    collection: "tourAttraction",
    timestamps: true,
  }
);

export {TourSchema};
