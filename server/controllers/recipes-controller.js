const Recipe = require("../model/Recipe");

const getAllRecipes = async (req, res, next) => {
  let recipes;

  try {
    recipes = await Recipe.find();
  } catch (err) {
    console.log(err);
  }

  if (!recipes) {
    return res.status(404).json({ message: "Nepodařilo se načíst žádné položky" });
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
    return res.status(404).json({ message: "Nebyl nalezen žádný recept..." });
  }

  return res.status(200).json({ recipe });
};

const addRecipe = async (req, res, next) => {
  const {
    name,
    author,
    description,
    servingCount,
    image,
    chosenIngredients,
    category,
    difficulty,
  } = req.body;
  let recipe;
  try {
    recipe = new Recipe({
      name,
      author,
      description,
      servingCount,
      image,
      category,
      difficulty,
      chosenIngredients: [{
        ingredientName,
        ingredientCount,
      }],
    });
    await recipe.save();
  } catch (err) {
    console.log(err);
  }
  

  if (!recipe) {
    return res.status(500).json({ message: "Nastala chyba. Recept nelze přidat." });
  }
  return res.status(201).json({ message: "Recept byl přidaný" });
};

const updateRecipe = async (req, res, next) => {
  const id = req.params.id;
  const {
    name,
    author,
    description,
    servingCount,
    image,
    chosenIngredients,
    category,
    difficulty,
  } = req.body;
  let recipe;
  try {
    recipe = await Recipe.findByIdAndUpdate(id, {
      name,
      author,
      description,
      servingCount,
      image,
      choseningredients,
      category,
      difficulty,
    });
    recipe = await recipe.save();
  } catch (err) {
    console.log(err);
  }

  if (!recipe) {
    return res.status(500).json({ message: "Nelze aktualizovat recept s tímto ID" });
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
    return res.status(500).json({ message: "Nelze smazat recept s tímto ID" });
  }
  return res
    .status(201)
    .json({ message: "Recept byl úspěšně smazán" });
};

exports.getAllRecipes = getAllRecipes;
exports.addRecipe = addRecipe;
exports.getById = getById;
exports.updateRecipe = updateRecipe;
exports.deleteRecipe = deleteRecipe;
