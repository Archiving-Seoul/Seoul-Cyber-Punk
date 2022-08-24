import { tourModel, TourModel } from "../db/index.js";

const tourController = {
  output: (req, res) => {
    res.render("create");
  },
  create: async (req, res) => {
    const content = req.body;
    console.log("content", content);
    const newContent = await tourModel.add(content);
    res.json(newContent);
  },
};

export { tourController };
