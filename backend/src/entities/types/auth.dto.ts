import { User } from '../User';

export type LoginCredentialsDto = {
    username?: string;
    email?: string;
    password: string;
}

export type LoginResponseDto = {
    user: User;
    accessToken: string;
    refreshToken: string;
}
