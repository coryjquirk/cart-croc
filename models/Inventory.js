const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  itemName: { type: String, required: true },
  price: { type: Number, required: true },
  description: { String },
  quantity: { type: Number }
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;