const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);

const cartSchema = new Schema({
  username: { type: String }, 
  itemName: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  sellQuantity: { type: Number },
  imgURL: { type: String }
});

const CartItem = mongoose.model("Cart", cartSchema);

module.exports = CartItem;