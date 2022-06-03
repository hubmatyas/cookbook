const express = require("express");
const Recipe = require("../model/Ingredient");
const ingredientsController = require("../controllers/ingredients-controller");
const router = express.Router();

router.get("/", ingredientsController.getAllIngredients);
router.post("/", ingredientsController.addIngredient);
router.get("/:id", ingredientsController.getById);
router.put("/:id", ingredientsController.updateIngredient);
router.delete("/:id", ingredientsController.deleteIngredient);

module.exports = router;