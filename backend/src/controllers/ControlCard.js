const ControlCard = require("../models/ControlCard");

module.exports = {
  async index(req, res) {
    const items = await ControlCard.find({ table: req.params.table });
    return res.json(items);
  },

  async show(req, res) {
    const item = await ControlCard.find({ table: req.params.table }).populate(
      "orders.product"
    );
    return res.json(item);
  },

  async store(req, res) {
    const item = await ControlCard.create(req.body);
    return res.json(item);
  },

  async update(req, res) {
    const item = await ControlCard.findByIdAndUpdate(req.body._id, {
      $set: { orders: req.body.orders }
    });
    return res.json(item);
  },

  async destroy(req, res) {
    const response = await ControlCard.findOneAndDelete({
      table: req.params.table
    });
    return res.send(response);
  }
};
