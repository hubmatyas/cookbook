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
  rating: {
    type: Number,
    required: true,
  },
  instructions: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  ingredient: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
