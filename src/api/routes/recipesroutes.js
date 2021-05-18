const router = require('express').Router();

const { 
    CreateRecipeController, 
    ReadsingleRecipeController,
    ReadRecipeController,
    UpdateRecipeController,
    DeleteRecipeController
} = require('../controllers/recipescontroller');

/**
* @route Post /recipe/create
* @desc Create the new recipe
* @access Public
*/
router.post('/create', CreateRecipeController);

/**
* @route Post /recipe/readsingle/:id
* @desc Read Single Recipe
* @access Public
*/
router.post('/readsingle/:id', ReadsingleRecipeController);

/**
* @route Post /recipe/read
* @desc Read All Recipes
* @access Public
*/
router.post('/read', ReadRecipeController);

/**
* @route Patch /recipe/update/:id
* @desc Update Recipe
* @access Public
*/
router.patch('/update/:id', UpdateRecipeController);


/**
* @route Delete /recipe/delete/:id
* @desc Delete Recipe
* @access Public
*/
router.delete('/delete/:id', DeleteRecipeController);



module.exports = router