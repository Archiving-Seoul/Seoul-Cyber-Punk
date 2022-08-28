import mongoose from "mongoose";
import { AboutSchema } from "../schemas/about-schema.js";

const { model } = mongoose;
const About = model("about", AboutSchema);

class AboutModel {
  async findAll() {
    return await About.find();
  }
}

const aboutModel = new AboutModel();

export { aboutModel };
