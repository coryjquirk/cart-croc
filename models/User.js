const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
=======
// Define userSchema
const userSchema = new Schema({
  username: { type: String, unique: false, required: false },
  password: { type: String, unique: false, required: false },
  isAdmin: { type: Boolean, unique: false, required: false },
});

// Define schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
>>>>>>> e6f0337f5264c793f2aebafcc26369ee4b32593b
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
