const Ingredient = require("../model/Ingredient");

const getAllIngredients = async (req, res, next) => {
  let ingredients;

  try {
    ingredients = await Ingredient.find();
  } catch (err) {
    console.log(err);
  }

  if (!ingredients) {
    return res.status(404).json({ message: "Couldn't load any ingredients" });
  }

  return res.status(200).json({ ingredients });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let ingredient;
  try {
    ingredient = await Ingredient.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!ingredient) {
    return res.status(404).json({ message: "No ingredient found" });
  }

  return res.status(200).json({ ingredient });
};

const addIngredient = async (req, res, next) => {
  const {
    name,
    unit,
  } = req.body;
  let ingredient;
  try {
    ingredient = new Ingredient({
      name,
      unit,
    });
    await ingredient.save();
  } catch (err) {
    console.log(err);
  }

  if (!ingredient) {
    return res.status(500).json({ message: "Unable to add ingredient" });
  }
  return res.status(201).json({ ingredient });
};

const updateIngredient = async (req, res, next) => {
  const id = req.params.id;
  const {
    name,
    unit,
  } = req.body;
  let ingredient;
  try {
    ingredient = await Ingredient.findByIdAndUpdate(id, {
      name,
      unit,
    });
    ingredient = await ingredient.save();
  } catch (err) {
    console.log(err);
  }

  if (!ingredient) {
    return res.status(500).json({ message: "Unable to update ingredient with this ID" });
  }
  return res.status(201).json({ ingredient });
};

const deleteIngredient = async (req, res, next) => {
  const id = req.params.id;
  let ingredient;
  try {
    ingredient = await Ingredient.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!ingredient) {
    return res.status(500).json({ message: "Unable to delete ingredient with this ID" });
  }
  return res
    .status(201)
    .json({ message: "Ingredient has been successfuly deleted." });
};

exports.getAllIngredients = getAllIngredients;
exports.addIngredient = addIngredient;
exports.getById = getById;
exports.updateIngredient = updateIngredient;
exports.deleteIngredient = deleteIngredient;
