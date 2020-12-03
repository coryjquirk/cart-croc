const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.pluralize(null);


const userSchema = new Schema({
  userName: { type: String },
  password: { type: String}
});

const User = mongoose.model("User", userSchema);

module.exports = User;