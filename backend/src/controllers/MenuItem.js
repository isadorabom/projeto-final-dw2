const MenuItem = require("../models/MenuItem");

module.exports = {
  async index(req, res) {
    const items = await MenuItem.find();
    return res.json(items);
  },

  async getByCod(req, res) {
    console.log(req);
    const item = await MenuItem.find({ cod: req.params.cod });

    return res.json(item);
  },
  async getByDescription(req, res) {
    const item = await MenuItem.find({
      description: {
        $regex: ".*" + req.params.description + ".*",
        $options: "i"
      }
    });
    return res.json(item);
  },

  async store(req, res) {
    const item = await MenuItem.create(req.body);
    return res.json(item);
  },

  async update(req, res) {
    const item = await MenuItem.create(req.body);
    MenuItem.id(req.body.id) = product;
    MenuItem.save();
    return res.json(item);
  },

  async destroy(req, res) {
    const response = await MenuItem.findByIdAndRemove(req.params.id);
    return res.send(response);
    try {
      const item = MenuItem.findByIdAndDelete(req.body.id);
      // MenuItem.id(req.body.id).remove();
      // MenuItem.save();
      return res.json(item);
    } catch (e) {
      console.log(e);
    }
  }
};
