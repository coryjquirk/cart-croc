const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);


const inventorySchema = new Schema({
  itemName: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  quantity: { type: Number }
});

const InventoryItem = mongoose.model("Inventory", inventorySchema);

module.exports = InventoryItem;