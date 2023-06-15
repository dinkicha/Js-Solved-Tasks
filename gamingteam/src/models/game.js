const { Schema, model, Types } = require("mongoose");
const URL_PATTERN = /^https?:\/\/.+$/i;

const gameSchema = new Schema({
    name: {
        type: String,
        required: true,
    minLength: [4, "Game name must be at least 4 characters"],
    },
    image: {
        type: String,
    required: true,
    validate: {
      validator: function (value) {
        return URL_PATTERN.test(value);
      },
      message: "Image URL is invalid",
    }
    },
    price: {
        type: Number,
        required: true,
        min: [1, 'Price must be a positive number']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'The description should be at least 10 characters']
    },
    genre: {
        type: String,
        required: true,
        minLength: [2, 'The genre should be at least 2 characters']
    },
    platform: {
        type: String,
        required: true,
        enum: {
            values: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
            message: 'Invalid platform',
        }
    },
    boughtBy: {
        type: [{type: Types.ObjectId, required: true, ref: 'User'}],
        default: [],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

const Game = model('Game', gameSchema);
module.exports = Game;