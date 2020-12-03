const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
<<<<<<< HEAD
  userName: { type: String, required: true },
  password: { type: String, required: true }
=======
  userName: { type: String },
  password: { type: String}
>>>>>>> b27c9768a92d2dfb8c6eb59cf99e2a60570db57b
});

const User = mongoose.model("User", userSchema);

module.exports = User;