const MenuItem = require("../models/MenuItem");

module.exports = {
	async index(req, res) {
		const items = await MenuItem.find({});
		return res.json(items);
	},

	async show(req, res) {
		const item = await MenuItem.findById(req.params.id);

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
		const item = MenuItem.findById(req.body.id);
		item.id(req.body.id).remove();
		MenuItem.save();

		return res.json(item);
	}
};
