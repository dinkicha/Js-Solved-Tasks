const { Schema, model } = require("mongoose");

//Промени на изпита
const userSchema = new Schema({
  username: { type: String, required: true, unique: true, minLength: [2, 'Username must be at least 2 characters long']},
  email: { type: String, required: true, unique: true, minLength: [10, "Email must be at least 10 characters long"]},
  password: { type: String, required: true, minLength: [4, "Password must be at least 4 characters long"]}
,
});

userSchema.index(
  { username: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);
userSchema.index(
  { email: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);
const User = model("User", userSchema);

module.exports = User;
