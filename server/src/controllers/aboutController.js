import { aboutModel } from "../db";

const aboutController = {
  getInfo: async (req, res) => {
    try {
      const result = await aboutModel.findAll();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  },
};

export { aboutController };
