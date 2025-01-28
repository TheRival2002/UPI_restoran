import Joi, { ObjectSchema, ValidationResult } from 'joi';
import { User } from '../entities/User';

// --------------------------------------------------------------------------------

const updateUserSchema: ObjectSchema<User> = Joi.object({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().trim().min(2).required(),
    surname: Joi.string().trim().min(2).required(),
    username: Joi.string().trim().min(3).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(8).required(),
    role_id: Joi.number().integer().positive().required(),
});

const validateUpdateUser = (userData: User): ValidationResult<User> => updateUserSchema.validate(userData);

export { validateUpdateUser };
