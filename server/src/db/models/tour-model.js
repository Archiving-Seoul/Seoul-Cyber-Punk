import mongoose from "mongoose";
import { TourSchema } from "../schemas/tour-schema.js";

const { model } = mongoose;
const Tour = model("tour", TourSchema);

export class TourModel {
  async create(tourInfo) {
    return await Tour.create(tourInfo);
  }
}

const tourModel = new TourModel();

export { tourModel };
