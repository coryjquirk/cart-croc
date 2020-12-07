const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);

const orderHistorySchema = new Schema({
  username: { type: String },
  itemNames: { type: Array },
  price: { type: Number },
  description: { type: String },
  sellQuantity: { type: Number },
  imgURL: { type: String }
});

const OrderHistory = mongoose.model("Order", orderHistorySchema);

module.exports = OrderHistory;