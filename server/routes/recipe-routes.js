const express = require("express");
const Recipe = require("../model/Recipe");
const recipeController = require("../controllers/recipes-controller");
const router = express.Router();

router.get("/", recipeController.getAllRecipes);
router.post("/", recipeController.addRecipe);
router.get("/:id", recipeController.getById);
router.put("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;