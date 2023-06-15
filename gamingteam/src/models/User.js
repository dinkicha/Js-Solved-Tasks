const { Schema, model } = require("mongoose");

//Промени на изпита
const userSchema = new Schema({
  username: { type: String, required: true, minLength: [5, 'The username should be at least 5 characters'] },
  email: { type: String, required: true, minLength: [10, 'The email should be at least 10 characters']  },
  password: { type: String, required: true},
});

const User = model("User", userSchema);

module.exports = User;
