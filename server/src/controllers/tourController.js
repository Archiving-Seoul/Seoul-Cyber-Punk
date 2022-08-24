import {tourModel} from "../db/models/tour-model";

const tourController = {
  output: (req, res) => {
    res.render("create");
  },
  create: async (req, res) => {
    const content = req.body;
    const newContent = await tourModel.create(content);
    res.json(newContent);
  },
};

export {tourController};
