import Joi, { ObjectSchema, ValidationResult } from 'joi';
import { User } from '../entities/User';
import { LoginCredentialsDto } from '../entities/types/auth.dto';

// --------------------------------------------------------------------------------

const loginSchema: ObjectSchema<LoginCredentialsDto> = Joi.object({
    username: Joi.string().trim().min(3),
    email: Joi.string().trim().email(),
    password: Joi.string().trim().min(8).required(),
}).xor('username', 'email') // Ensures exactly one of username or email is present
    .required();

const validateLogin = (loginCredentials: LoginCredentialsDto): ValidationResult<LoginCredentialsDto> => loginSchema.validate(loginCredentials);

// --------------------------------------------------------------------------------

const registerSchema: ObjectSchema<User> = Joi.object({
    name: Joi.string().trim().min(2).required(),
    surname: Joi.string().trim().min(2).required(),
    username: Joi.string().trim().min(3).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(8).required(),
    role_id: Joi.number().integer().positive().optional(),
});

const validateRegister = (userData: User): ValidationResult<User> => registerSchema.validate(userData);

export { validateLogin, validateRegister };