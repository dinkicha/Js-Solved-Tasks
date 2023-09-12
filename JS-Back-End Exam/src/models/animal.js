const { Schema, model, Types } = require("mongoose");
const URL_PATTERN = /^https?:\/\/.+$/i;

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'The name should be at least 2 characters long']
    },
    years: {
        type: Number,
        required: true,
        min: [1, 'Years must be between 1 and 100'],
        max: [100, 'Years must be between 1 and 100'],
    },
    kind: {
        type: String,
        required: true,
        minLength: [3, 'The kind should be at least 3 characters long']

    },
    image: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
              return URL_PATTERN.test(value);
            },
            message: "Image URL is invalid",
          },
    },
    need: {
        type: String,
        required: true,
        minLength: [3, 'The needs should be at least 3 characters long'],
        maxLength: [20, 'The needs should be at most 20 characters long']
    },
    location: {
        type: String,
        required: true,
        minLength: [5, 'The location should be at least 5 characters long'],
        maxLength: [15, 'The location should be at most 15 characters long']
    },
    description: {
        type: String,
        required: true,
        minLength: [5, 'The description should be at least 5 characters long'],
        maxLength: [50, 'The description should be at most 50 characters long']
    },
    donation: [{type: Types.ObjectId, ref: 'User'}],
    owner: { type: Types.ObjectId, ref: 'User'},
});

const Animal = model("Animal", animalSchema);

module.exports = Animal;