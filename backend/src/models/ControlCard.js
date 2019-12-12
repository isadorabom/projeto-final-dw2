const { Schema, model } = require("mongoose");
const ControlCardSchema = new Schema(
	{
		table: {
			type: Number,
			required: true
		},
		orders: [
			{
				product: { type: Schema.Types.ObjectId, ref: "MenuItem" },
				quantity: { type: Number }
			}
		],
		total: { type: Number }
	},
	{
		timestamps: true
	}
);
ControlCardSchema.methods.getTotal = function() {
	this.total = 0;
	this.children.array.forEach(child => {
		this.total += child.price * child.quantity;
	});
};
ControlCardSchema.methods.addOrder = function() {
	this.total.append();
	this.children.array.forEach(child => {
		this.total += child.price * child.quantity;
	});
};
module.exports = model("ControlCard", ControlCardSchema);
