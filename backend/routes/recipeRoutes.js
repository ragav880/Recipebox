const express = require("express");
const Recipe = require("../models/Recipe");
const router = express.Router();

// Create a new recipe (POST)
router.post('/', async (req, res) => {
    const { title, img, category, level, description, ingredients, steps } = req.body;

    try {
        const newRecipe = new Recipe({
            title,
            img,
            category,
            level,
            description,
            ingredients,
            steps
        });

        const recipe = await newRecipe.save();
        res.json(recipe);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get all recipes (GET)
router.get("/", async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single recipe by ID (GET)
router.get("/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a recipe by ID (PUT)
router.put("/:id", async (req, res) => {
    try {
        const { title, img, category, level, description, ingredients, steps } = req.body;
        const updatedIngredients = Array.isArray(ingredients) ? ingredients : (ingredients || '').split(',').map(ingredient => ingredient.trim());
        const updatedSteps = Array.isArray(steps) ? steps : (steps || '').split(',').map(step => step.trim());
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            {
                title,
                img,
                category,
                level,
                description,
                ingredients: updatedIngredients,
                steps: updatedSteps,
            },
            { new: true }
        );
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a recipe by ID (DELETE)
router.delete("/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;