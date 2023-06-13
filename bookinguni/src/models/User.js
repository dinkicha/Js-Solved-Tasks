const { Schema, model } = require("mongoose");

//Промени на изпита
const userSchema = new Schema({
  email: { type: String, required: true, unique: true},
  username: { type: String, required: true, unique: true, 
    match: [/^[a-zA-Z0-9]+$/i,'Username may contain only english letter and numbers'] 
  },
  password: { type: String, required: true },
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
