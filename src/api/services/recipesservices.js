const Recipe = require('../models/recipesmodel');

exports.CreateRecipeService = (body) => {
    const { dish, chef, description, image, ingredientsArray } = body;

    const newRecipe = new Recipe({dish, chef, description, image, ingredientsArray});

    return new Promise( (resolve, reject) =>{
        
        Recipe.findOne({dish})
        .then( recipe => {
            
            if(recipe) return reject('Recipe Already Exist.');

            newRecipe.save()
            .then(recipeCreated => resolve(recipeCreated))
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
}

exports.ReadsingleRecipeService = (id) => {
    return new Promise ( (resolve, reject) =>{
        Recipe.findOne({_id: id})
        .then(recipe => resolve(recipe))
        .catch(err => reject(err));
    });
}

exports.ReadRecipeService = new Promise ( (resolve, reject) =>{
        Recipe.find()
        .then(recipies => resolve(recipies))
        .catch(err => reject(err));
});

exports.UpdateRecipeService = (id, body) => {

    const { dish, chef, description, image, ingredientsArray } = body;
    const UpdatedRecipe = { dish, chef, description, image, ingredientsArray };

    return new Promise ( (resolve, reject) =>{
        Recipe.findOneAndUpdate({_id: id}, {$set: UpdatedRecipe}, {new: true})
        .then(recipe => resolve(recipe))
        .catch(err => reject(err))
    });
}

exports.DeleteRecipeService = (id) => {
    return new Promise ( (resolve, reject) =>{
        Recipe.findOneAndDelete({_id: id})
        .then(recipe => resolve(recipe))
        .catch(err => reject(err))
    });
}