import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    collection: "category",
    timestamps: true,
  }
);

export { CategorySchema };
