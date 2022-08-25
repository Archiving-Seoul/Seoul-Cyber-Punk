import mongoose from "mongoose";
const { Schema } = mongoose;

const TourSchema = new Schema(
  {
    // name: {
    //   type: String,
    //   // required: true,
    // },
    // address: {
    //   type: String,
    //   // required: true,
    // },
    // description: {
    //   type: String,
    //   // required: true,
    // },
    imgURL: {
      type: String,
      // required: true,
    },
    size: {
      type: String,
    },
    mood: {
      type: String,
    },
    // category: {
    //   type: Array,
    //   // required: true,
    // },
  },
  {
    collection: "imageURL",
    timestamps: true,
  }
);

export { TourSchema };
