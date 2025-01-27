import { User } from '../entities/User';
import { BadRequestError, ValidationError } from '../errors/HttpError';
import { UsersRepository } from '../repositories/UsersRepository';
import { validateUpdateUser } from '../validation_schema/User';

// --------------------------------------------------------------------------------

export class UsersService {
    private readonly usersRepository = new UsersRepository();

    public async updateUser(user: User) {
        const { error, value: validatedUser } = validateUpdateUser(user);
        if (error)
            throw new ValidationError(error.message);

        const usernameExists = await this.usersRepository.findByUsername(validatedUser.username);
        if (usernameExists && usernameExists.id !== validatedUser.id)
            throw new BadRequestError('Username already exists');

        const emailExists = await this.usersRepository.findByEmail(validatedUser.email);
        if (emailExists && emailExists.id !== validatedUser.id)
            throw new BadRequestError('Email already exists');

        return this.usersRepository.update(validatedUser);
    }
}
