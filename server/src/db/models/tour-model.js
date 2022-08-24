import mongoose from "mongoose";
import { TourSchema } from "../schemas/tour-schema.js";

const { model } = mongoose;
const Tour = model("tourAttraction", TourSchema);

export class TourModel {
  async add(tourInfo) {
    return await Tour.create(tourInfo);
  }
}

const tourModel = new TourModel();

export { tourModel };
