const ControlCard = require("../models/ControlCard");

module.exports = {
	async index(req, res) {
		const items = await ControlCard.find();
		return res.json(items);
	},

	async show(req, res) {
		const item = await ControlCard.findById(req.params.id);

		return res.json(item);
	},

	async store(req, res) {
		const item = await ControlCard.create(req.body);
		return res.json(item);
	},

	async update(req, res) {
		const item = await ControlCard.create(req.body);
		MenuItem.id(req.body.id) = product;
		MenuItem.save();
		return res.json(item);
	},

	async destroy(req, res) {
		const response = await ControlCard.findByIdAndRemove(req.params.id);
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
