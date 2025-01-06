import { LoginCredentialsDto, LoginResponseDto } from '../../entities/types/auth.dto';

// ----------------------------------------------------------------------

export const loginCredentials: LoginCredentialsDto = {
    email: 'john@email.com',
    username: 'john_doe',
    password: 'password123',
};

export const jwtTokens: LoginResponseDto = {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
};