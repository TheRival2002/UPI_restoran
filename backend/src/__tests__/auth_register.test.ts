import express from 'express';
import request from 'supertest';
import { RoleEnum } from '../entities/enums/RolesEnum';
import { BadRequestError } from '../errors/HttpError';
import { createTestApp } from '../helpers/testApp';
import { AuthService } from '../services/AuthService';
import { jwtTokens } from './constants/auth';
import { mockUser } from './constants/user';

// --------------------------------------------------------------

jest.mock('../services/AuthService');

const mockAuthService = AuthService as jest.MockedClass<typeof AuthService>;

describe('POST /register', () => {
    let app: express.Express;

    beforeEach(() => {
        app = createTestApp();

        jest.clearAllMocks();
    });

    it('should register a new user and log him in', async () => {
        mockAuthService.prototype.register.mockResolvedValue(mockUser);
        mockAuthService.prototype.login.mockResolvedValue({
            accessToken: jwtTokens.accessToken,
            refreshToken: jwtTokens.refreshToken,
            user: mockUser,
        });

        const response = await request(app)
            .post('/register')
            .send(mockUser);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            message: 'User created',
            accessToken: jwtTokens.accessToken,
            user: mockUser,
        });
        expect(response.headers['set-cookie']).toBeDefined();
        expect(response.headers['set-cookie'][0]).toContain('jwt=refreshToken');

        expect(mockAuthService.prototype.register).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.register).toHaveBeenCalledWith(mockUser);
        expect(mockAuthService.prototype.login).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.login).toHaveBeenCalledWith({
            email: mockUser.email,
            password: mockUser.password,
        });
    });

    it('should verify cookie attributes after successful registration', async () => {
        mockAuthService.prototype.register.mockResolvedValue(mockUser);
        mockAuthService.prototype.login.mockResolvedValue({
            accessToken: jwtTokens.accessToken,
            refreshToken: jwtTokens.refreshToken,
            user: mockUser,
        });

        const response = await request(app)
            .post('/register')
            .send(mockUser);

        const cookieHeader = response.headers['set-cookie'][0];
        expect(cookieHeader).toMatch(/HttpOnly/);
        expect(cookieHeader).toMatch(/Max-Age=86400/); // 24 * 60 * 60 = 86400 seconds
        expect(cookieHeader).toMatch(/Path=\//);
    });

    it('should return 400 if user with the same username already exists', async () => {
        mockAuthService.prototype.register.mockRejectedValue(new BadRequestError('Username already exists'));

        const response = await request(app)
            .post('/register')
            .send(mockUser);

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Username already exists' });
        expect(mockAuthService.prototype.register).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.register).toHaveBeenCalledWith(mockUser);
    });

    it('should return 400 if user with the same email already exists', async () => {
        mockAuthService.prototype.register.mockRejectedValue(new BadRequestError('Email already exists'));

        const response = await request(app)
            .post('/register')
            .send(mockUser);

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'Email already exists' });
        expect(mockAuthService.prototype.register).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.register).toHaveBeenCalledWith(mockUser);
    });

    it('should return 500 if a server error occurs', async () => {
        mockAuthService.prototype.register.mockRejectedValue(new Error('Internal server error'));

        const response = await request(app)
            .post('/register')
            .send(mockUser);

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Internal server error' });
        expect(mockAuthService.prototype.register).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.register).toHaveBeenCalledWith(mockUser);
    });

    it('should handle login failure after successful registration', async () => {
        mockAuthService.prototype.register.mockResolvedValue(mockUser);
        mockAuthService.prototype.login.mockRejectedValue(
            new Error('LoginPage failed after registration')
        );

        const response = await request(app)
            .post('/register')
            .send(mockUser);

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Internal server error' });
        expect(mockAuthService.prototype.register).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.register).toHaveBeenCalledWith(mockUser);
        expect(mockAuthService.prototype.login).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.login).toHaveBeenCalledWith({
            email: mockUser.email,
            password: mockUser.password,
        });
    });

    it('should set correct role_id for new user', async () => {
        mockAuthService.prototype.register.mockImplementation(async (userData) => {
            expect(userData.role_id).toBe(RoleEnum.USER);
            return mockUser;
        });
        mockAuthService.prototype.login.mockResolvedValue({
            accessToken: jwtTokens.accessToken,
            refreshToken: jwtTokens.refreshToken,
            user: mockUser,
        });

        await request(app)
            .post('/register')
            .send(mockUser);

        expect(mockAuthService.prototype.register).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.register).toHaveBeenCalledWith(mockUser);
        expect(mockAuthService.prototype.login).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.login).toHaveBeenCalledWith({
            email: mockUser.email,
            password: mockUser.password,
        });
    });
});
