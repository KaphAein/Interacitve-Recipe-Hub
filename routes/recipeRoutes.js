const express = require('express');
const Recipe = require('../models/Recipe');
const router = express.Router();

// Get All Recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add New Recipe
router.post('/', async (req, res) => {
    const { title, ingredients, instructions, authorId } = req.body;
    try {
        const newRecipe = new Recipe({ title, ingredients, instructions, authorId });
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
