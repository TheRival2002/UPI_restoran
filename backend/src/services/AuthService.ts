import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';

// ----------------------------------------------------------------------

type LoginResponse = {
    accessToken: string;
    refreshToken: string;
}

export class AuthService {
    private readonly usersRepository = new UsersRepository();
    private readonly bcrypt = require('bcrypt');
    private readonly jwt = require('jsonwebtoken');

    public async register(name: string, surname: string, username: string, email: string, password: string, role_id: number): Promise<User> {
        const hashedPassword = await this.bcrypt.hash(password, 10);

        return await this.usersRepository.create(name, surname, username, email, hashedPassword, role_id);
    }

    public async login(password: string, username?: string, email?: string): Promise<LoginResponse> {
        if (!username && !email) {
            throw new Error('Username or email is required'); // TODO moramo smislit kako vratit error sa response statusom
        }

        const foundUser = username
            ? await this.usersRepository.findByUsername(username)
            : await this.usersRepository.findByEmail(email!); // explicit non-null assertion because if username is not provided, email exists which we know from the if condition on the start

        if (!foundUser) {
            throw new Error('User not found');
        }

        const passwordMatch = await this.bcrypt.compare(password, foundUser.password);
        if (!passwordMatch) {
            throw new Error('Invalid password');
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