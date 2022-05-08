const Recipe = require("../model/Recipe");

const getAllRecipes = async (req, res, next) => {
  let recipes;

  try {
    recipes = await Recipe.find();
  } catch (err) {
    console.log(err);
  }

  if (!recipes) {
    return res.status(404).json({ message: "Couldn't load any items" });
  }

  return res.status(200).json({ recipes });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let recipe;
  try {
    recipe = await Recipe.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!recipe) {
    return res.status(404).json({ message: "No recipe found" });
  }

  return res.status(200).json({ recipe });
};

const addRecipe = async (req, res, next) => {
  const {
    name,
    author,
    description,
    servingCount,
    rating,
    instructions,
    image,
  } = req.body;
  let recipe;
  try {
    recipe = new Recipe({
      name,
      author,
      description,
      servingCount,
      rating,
      instructions,
      image,
    });
    await recipe.save();
  } catch (err) {
    console.log(err);
  }

  if (!recipe) {
    return res.status(500).json({ message: "Unable to add recipe" });
  }
  return res.status(201).json({ recipe });
};

const updateRecipe = async (req, res, next) => {
  const id = req.params.id;
  const {
    name,
    author,
    description,
    servingCount,
    rating,
    instructions,
    image,
  } = req.body;
  let recipe;
  try {
    recipe = await Recipe.findByIdAndUpdate(id, {
      name,
      author,
      description,
      servingCount,
      rating,
      instructions,
      image,
    });
    recipe = await recipe.save();
  } catch (err) {
    console.log(err);
  }

  if (!recipe) {
    return res.status(500).json({ message: "Unable to update by this ID" });
  }
  return res.status(201).json({ recipe });
};

const deleteRecipe = async (req, res, next) => {
  const id = req.params.id;
  let recipe;
  try {
    recipe = await Recipe.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!recipe) {
    return res.status(500).json({ message: "Unable to delete by this ID" });
  }
  return res
    .status(201)
    .json({ message: "Recipe has been successfuly deleted." });
};

exports.getAllRecipes = getAllRecipes;
exports.addRecipe = addRecipe;
exports.getById = getById;
exports.updateRecipe = updateRecipe;
exports.deleteRecipe = deleteRecipe;
