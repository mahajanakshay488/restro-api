const { 
    CreateRecipeService, 
    ReadsingleRecipeService, 
    ReadRecipeService,
    UpdateRecipeService,
    DeleteRecipeService
} = require("../services/recipesservices")
const { RecipeValidator } = require("../validation/recipevalidator")

exports.CreateRecipeController = (req, res, next) => {

    const {value, error} = RecipeValidator(req.body);

    if(error) return res.status(402).json({error: error.details[0].message});

    CreateRecipeService(value)
    .then(recipe => res.status(201).json({message: 'Recipe Created', recipe}))
    .catch(err => res.status(501).json({message: 'Something Went Wrong', err}))
}

exports.ReadsingleRecipeController = (req, res, next) => {
    ReadsingleRecipeService(req.params.id)
    .then(recipe => res.status(201).json({message: 'Recipe', recipe}))
    .catch(err => res.status(501).json({message: 'Something Went Wrong', err}))
}

exports.ReadRecipeController = (req, res, next) => {
    ReadRecipeService
    .then(recipe => res.status(201).json({message: 'Recipies', recipe}))
    .catch(err => res.status(501).json({message: 'Something Went Wrong', err}))
}


exports.UpdateRecipeController = (req, res, next) => {
    UpdateRecipeService(req.params.id, req.body)
    .then(recipe => res.status(201).json({message: 'Recipe Updated', recipe}))
    .catch(err => res.status(501).json({message: 'Something Went Wrong', err}))
}

exports.DeleteRecipeController = (req, res, next) => {
    DeleteRecipeService(req.params.id)
    .then(recipe => res.status(201).json({message: 'Recipe Deleted', recipe}))
    .catch(err => res.status(501).json({message: 'Something Went Wrong', err}))
}