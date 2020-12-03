const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);


const receiptSchema = new Schema({
  itemsSold: { type: Array, required: true },
  dateSold: { type: Date, required: true },
});

const Receipt = mongoose.model("Receipt", receiptSchema);

module.exports = Receipt;
