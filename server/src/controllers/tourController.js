import { tourModel } from "../db/index.js";

const tourController = {
  output: (req, res) => {
    res.render("create");
  },
  create: async (req, res) => {
    const content = req.body;
    const newContent = await tourModel.add(content);
    res.json(newContent);
  },
  upload: async (req, res) => {
    const result = req.body;
    console.log("업로드결과", result);
    res.json(result);
  },
};

export { tourController };
