import {tourModel} from "../db/index";

const tourController = {
  readByCateogry: async (req, res) => {
    try {
      const {categoryId} = req.params;
      const result = await tourModel.findAll();
      res.status(200).json({
        data: result,
      });
    } catch (error) {
      console.error(error);
    }
  },

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
    const imgURL = {mainURL: file.location};
    res.status(200).json(imgURL);
  },
  uploadSub: async (req, res) => {
    const file = req.file;
    const imgURL = {subURL: file.location};
    res.status(200).json(imgURL);
  },
};

export {tourController};
