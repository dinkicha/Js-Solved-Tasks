const { Schema, model, Types } = require("mongoose");
const URL_PATTERN = /^https?:\/\/.+$/i;


//Промени на изпита
const photoSchema = new Schema({
 name: { type: String, required: true, minLength: [2, "Username must be at least 2 characters long"]},
 image: { type: String, required: true, validate: {
    validator: function (value) {
      return URL_PATTERN.test(value);
    },
    message: "Image URL is invalid",
  }, },
 age: { type: Number, required: true, min: [1, "Age must be between 1 and 100"], max: [100, "Age must be between 1 and 100"]},
 description: { type: String, required: true, minLength: [5, "Description must be between 5 and 50"], maxLength: [50, "Description must be between 5 and 50"]},
 location: { type: String, required: true, minLength: [5, "Location must be between 5 and 50"], maxLength: [50, "Location must be between 5 and 50"] },
 commentList: { type: [{userId: {type: Types.ObjectId, required: true, ref: 'User'},comment: {type: String, required: true}}], default: []},
 owner: { type: Types.ObjectId, required: true, ref: 'User' },
});

const Photo = model("Photo", photoSchema);

module.exports = Photo;
