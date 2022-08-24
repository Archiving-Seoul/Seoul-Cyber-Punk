const tourController = {
  output: (req, res) => {
    res.render("create");
  },
  create: async (req, res) => {
    const id = req.body;
    console.log(id);
  },
};
module.exports = tourController;
