import { User } from '../entities/User';
import { RoleEnum } from '../entities/enums/RolesEnum';
import { BadRequestError, NotFoundError, UnauthorizedError, ValidationError } from '../errors/HttpError';
import { UsersRepository } from '../repositories/UsersRepository';
import { LoginCredentialsDto, LoginResponseDto } from '../entities/types/auth.dto';
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

        const usernameExists = await this.usersRepository.findByUsername(validatedUserData.username);
        if (usernameExists)
            throw new BadRequestError('Username already exists');

        const emailExists = await this.usersRepository.findByEmail(validatedUserData.email);
        if (emailExists)
            throw new BadRequestError('Email already exists');

        validatedUserData.password = await this.bcrypt.hash(validatedUserData.password, 10);
        validatedUserData.role_id = RoleEnum.USER;

        return await this.usersRepository.create(validatedUserData);
    }

    public async login(loginCredentials: LoginCredentialsDto): Promise<LoginResponseDto> {
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
            id: foundUser.id,
            role_id: foundUser.role_id,
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

        const refreshToken = this.jwt.sign({
            id: foundUser.id,
            role_id: foundUser.role_id,
        }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

        return { user: foundUser, accessToken, refreshToken };
    }
}
