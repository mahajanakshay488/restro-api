const Joi = require('joi');

exports.RecipeValidator = (body) => {

    const joiSchema = Joi.object({
        dish: Joi.string().min(4).required(),
        chef: Joi.string().min(4).required(),
        image: Joi.string().required(),
        description: Joi.string().min(8).required(),
        ingredientsArray: Joi.required()
    });

    return joiSchema.validate(body, {aboutEarly: false});
}

/* .message({
    'string.base': `{#key} should be a type of 'text'`,
    'string.empty': `{#key} cannot be an empty field`,
    'string.min': `{#key} should have a minimum length of {#limit}`,
    'any.required': `{#key} is a required field`
}) */