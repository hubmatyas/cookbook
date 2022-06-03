const express = require("express");
const Recipe = require("../model/Ingredient");
const ingredientsController = require("../controllers/ingredients-controller");
const router = express.Router();

router.get("/", ingredientsController.getAllRecipes);
router.post("/", ingredientsController.addRecipe);
router.get("/:id", ingredientsController.getById);
router.put("/:id", ingredientsController.updateRecipe);
router.delete("/:id", ingredientsController.deleteRecipe);

module.exports = router;