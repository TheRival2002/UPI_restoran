import { LoginCredentialsDto, LoginResponseDto } from '../../entities/types/auth.dto';

// ----------------------------------------------------------------------

export const loginCredentials: LoginCredentialsDto = {
    email: 'john@email.com',
    username: 'john_doe',
    password: 'password123',
};

export const jwtTokens: Omit<LoginResponseDto, 'user'> = {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
};
