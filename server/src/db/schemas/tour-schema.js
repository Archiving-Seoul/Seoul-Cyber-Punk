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
    mainURL: {
      type: String,
      // required: true,
    },
    someURL: {
      type: String,
      // required: true,
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
    collection: "about",
    timestamps: true,
  }
);

export { TourSchema };
