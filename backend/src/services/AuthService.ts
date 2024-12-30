import { User } from '../entities/User';
import { RoleEnum } from '../enums/RolesEnum';
import { NotFoundError, UnauthorizedError, ValidationError } from '../errors/HttpError';
import { UsersRepository } from '../repositories/UsersRepository';
import { LoginCredentials, LoginResponse } from '../types/auth';
import { validateLogin, validateRegister } from '../validation_schema/Auth';

// ----------------------------------------------------------------------

export class AuthService {
    private readonly usersRepository = new UsersRepository();
    private readonly bcrypt = require('bcrypt');
    private readonly jwt = require('jsonwebtoken');

    public async register(userData: User): Promise<User> {
        const { error, value: validatedUserData } = validateRegister(userData);
        if (error)
            throw new ValidationError(error.message);

        userData.password = await this.bcrypt.hash(validatedUserData.password, 10);
        userData.role_id = RoleEnum.USER;

        return await this.usersRepository.create(validatedUserData);
    }

    public async login(loginCredentials: LoginCredentials): Promise<LoginResponse> {
        const { error, value: validatedLoginCredentials } = validateLogin(loginCredentials);

        if (error)
            throw new ValidationError(error.message);

        const foundUser = validatedLoginCredentials.username
            ? await this.usersRepository.findByUsername(validatedLoginCredentials.username)
            : await this.usersRepository.findByEmail(validatedLoginCredentials.email!); // explicit non-null assertion because if username is not provided, email exists which we know from the if condition on the start

        if (!foundUser) {
            throw new NotFoundError('User not found');
        }

        const passwordMatch = await this.bcrypt.compare(validatedLoginCredentials.password, foundUser.password);
        if (!passwordMatch) {
            throw new UnauthorizedError('Invalid password');
        }

        const accessToken = this.jwt.sign({
            username: foundUser.username
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

        const refreshToken = this.jwt.sign({
            username: foundUser.username,
        }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

        return { accessToken, refreshToken };
    }
}