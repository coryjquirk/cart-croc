const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);

const orderHistorySchema = new Schema({
  username: { type: String },
  order: { type: Array },
  orderDate: { type: Date }
});

const OrderHistory = mongoose.model("Order", orderHistorySchema);

module.exports = OrderHistory;