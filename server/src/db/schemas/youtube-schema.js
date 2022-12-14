import mongoose from "mongoose";
const { Schema } = mongoose;

const YoutubeSchema = new Schema(
  {
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
    collection: "youtube",
    timestamps: true,
  }
);

export { YoutubeSchema };
