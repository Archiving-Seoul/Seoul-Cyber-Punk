import { tourModel } from "../db/index.js";

const tourController = {
  output: (req, res) => {
    res.render("create");
  },
  create: async (req, res) => {
    const content = req.body;
    const newContent = await tourModel.add(content);
    res.status(200).json(newContent);
  },
  upload: async (req, res) => {
    const file = req.file;
    const imgURL = { imgURL: file.location };
    await tourModel.add(imgURL);
    res.status(200).json(imgURL);
  },
};

export { tourController };
