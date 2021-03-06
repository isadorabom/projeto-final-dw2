const { Schema, model } = require("mongoose");
const ControlCardSchema = new Schema(
  {
    table: {
      type: Number,
      required: true,
      unique: true
    },
    orders: [
      {
        product: { type: Schema.Types.ObjectId, ref: "MenuItem" },
        quantity: { type: Number }
      }
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);
module.exports = model("ControlCard", ControlCardSchema);
