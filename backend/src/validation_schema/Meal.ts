import Joi, { ValidationResult } from 'joi';
import { Meal } from '../entities/Meal';

// --------------------------------------------------------------------------------

const createMealSchema = Joi.object({
    name: Joi.string().trim().min(3).required(),
    description: Joi.string().trim().allow(null),
    price: Joi.number().min(0).required(),
    image: Joi.string().trim().allow(null),
    mealCategoryId: Joi.number().min(1).required(),
});

const validateCreateMeal = (meal: Meal): ValidationResult<Meal> => createMealSchema.validate(meal);

export { validateCreateMeal };