const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  servingCount: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: Object,
      required: false,
      name: {
        type: String,
        required: true,
      },
      unit: {
        type: String,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      }
    }
  ],
  category: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
