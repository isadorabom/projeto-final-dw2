const { Schema, model } = require("mongoose");
const OldControlCardSchema = new Schema(
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
    total: {
      type: Number,
      required: true
    },
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
module.exports = model("OldControlCard", OldControlCardSchema);
