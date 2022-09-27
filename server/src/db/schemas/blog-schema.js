import mongoose from "mongoose";
const { Schema } = mongoose;

const BlogSchema = new Schema(
  {
    tab: {
      type: String,
      required: true,
    },
    linkURL: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    collection: "blog",
    timestamps: true,
  }
);

export { BlogSchema };
