const { Schema, model } = require("mongoose");

//Промени на изпита
const userSchema = new Schema({
  email: { type: String, required: true, minLength: [10, 'Email must be at least 10 characters long'] },
  password: { type: String, required: true, minLength: [4, 'Password must be at least 4 characters long']},
});


const User = model("User", userSchema);

module.exports = User;
