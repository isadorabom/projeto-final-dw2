const User = require("../models/User");

module.exports = {
	async store(req, res) {
		const { email } = req.body;
		if (await User.findOne({ email })) {
			return res.status(400).json({ error: "User already exists" });
		}

		const user = await User.create(req.body);

		return res.json(user);
	},

	async index(req, res) {
		const users = await User.find();

		return res.json(users);
	},

	async destroy(req, res) {
		await User.deleteOne({ _id: req.params.id });
		return res.json({ message: "User deleted." });
	}
};
