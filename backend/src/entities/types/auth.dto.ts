export type LoginCredentialsDto = {
    username?: string;
    email?: string;
    password: string;
}

export type LoginResponseDto = {
    accessToken: string;
    refreshToken: string;
}