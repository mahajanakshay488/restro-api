const mongoose = require('mongoose');

const recipesSchema = new mongoose.Schema({
    dish: String,
    chef: String,
    ingredientsArray: [String],
    image: String,
    description: String,
}, { timestamps: true });

module.exports = mongoose.model('recipe', recipesSchema);