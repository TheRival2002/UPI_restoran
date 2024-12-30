import Joi, { ObjectSchema, ValidationResult } from 'joi';
import { User } from '../entities/User';
import { LoginCredentials } from '../types/auth';

// --------------------------------------------------------------------------------

const loginSchema: ObjectSchema<LoginCredentials> = Joi.object({
    username: Joi.string().trim().min(3),
    email: Joi.string().trim().email(),
    password: Joi.string().trim().min(6).required(),
}).xor('username', 'email') // Ensures exactly one of username or email is present
    .required();

const validateLogin = (loginCredentials: LoginCredentials): ValidationResult<LoginCredentials> => loginSchema.validate(loginCredentials);

// --------------------------------------------------------------------------------

const registerSchema: ObjectSchema<User> = Joi.object({
    name: Joi.string().trim().min(2).required(),
    surname: Joi.string().trim().min(2).required(),
    username: Joi.string().trim().min(3).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(6).required(),
    role_id: Joi.number().integer().positive().optional(),
});

const validateRegister = (userData: User): ValidationResult<User> => registerSchema.validate(userData);

export { validateLogin, validateRegister };