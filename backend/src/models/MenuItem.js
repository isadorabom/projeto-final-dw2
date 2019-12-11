const { Schema, model } = require("mongoose");
const MenuItemSchema = new Schema(
	{
		cod: {
			type: Number,
			unique: true,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		category: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = model("MenuItem", MenuItemSchema);
