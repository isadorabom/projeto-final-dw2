const OldControlCard = require("../models/OldControlCard");

module.exports = {
  async index(req, res) {
    const items = await OldControlCard.find();
    return res.json(items);
  },

  async show(req, res) {
    const item = await OldControlCard.find({
      table: req.params.table
    }).populate("orders.product");
    //  if (item.length === 0) throw "Não há comanda para essa mesa";
    return res.json(item);
  },

  async store(req, res) {
    const item = await OldControlCard.create({
      ...req.body.controlCard,
      total: req.body.total
    });
    return res.json(item);
  },

  async update(req, res) {
    const item = await OldControlCard.findByIdAndUpdate(req.body._id, {
      $set: { orders: req.body.orders }
    });
    return res.json(item);
  },

  async destroy(req, res) {
    const response = await OldControlCard.findByIdAndRemove(req.params.id);
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
