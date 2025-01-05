import bcrypt from 'bcrypt';
import express from 'express';
import request from 'supertest';
import { NotFoundError, UnauthorizedError, ValidationError } from '../errors/HttpError';
import { createTestApp } from '../helpers/testApp';
import { UsersRepository } from '../repositories/UsersRepository';
import { AuthService } from '../services/AuthService';
import { jwtTokens, loginCredentials } from './constants/auth';
import { mockUser } from './constants/user';

// --------------------------------------------------------------

jest.mock('../services/AuthService');
jest.mock('../repositories/UsersRepository');
jest.mock('bcrypt');

const mockAuthService = AuthService as jest.MockedClass<typeof AuthService>;
const mockUsersRepository = UsersRepository as jest.MockedClass<typeof UsersRepository>;

describe('POST /login', () => {
   let app: express.Express;

    beforeEach(() => {
        app = createTestApp();

        jest.clearAllMocks();
    });

    it('should log in a user with valid email', async () => {
        mockUsersRepository.prototype.findByEmail.mockResolvedValue(mockUser);
        mockAuthService.prototype.login.mockResolvedValue({
            accessToken: jwtTokens.accessToken,
            refreshToken: jwtTokens.refreshToken,
        });

        const response = await request(app)
            .post('/login')
            .send({ email: loginCredentials.email, password: loginCredentials.password });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            accessToken: jwtTokens.accessToken,
        });
        expect(mockUser.email).toBe(loginCredentials.email);
        expect(mockAuthService.prototype.login).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.login).toHaveBeenCalledWith({ email: loginCredentials.email, password: loginCredentials.password });
        expect(response.headers['set-cookie']).toBeDefined();
        expect(response.headers['set-cookie'][0]).toContain('jwt=refreshToken');
    });

    it('should log in a user with valid username', async () => {
        mockUsersRepository.prototype.findByUsername.mockResolvedValue(mockUser);
        mockAuthService.prototype.login.mockResolvedValue({
            accessToken: jwtTokens.accessToken,
            refreshToken: jwtTokens.refreshToken,
        });

        const response = await request(app)
            .post('/login')
            .send({ username: loginCredentials.username, password: loginCredentials.password });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            accessToken: jwtTokens.accessToken,
        });
        expect(mockUser.username).toBe(loginCredentials.username);
        expect(mockAuthService.prototype.login).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.login).toHaveBeenCalledWith({ username: loginCredentials.username, password: loginCredentials.password });
        expect(response.headers['set-cookie']).toBeDefined();
        expect(response.headers['set-cookie'][0]).toContain('jwt=refreshToken');
    });

    it('should log in a user with valid password', async () => {
        const bcryptCompare = jest.fn().mockResolvedValue(true);
        (bcrypt.compare as jest.Mock) = bcryptCompare;

        const hashedPassword = 'hashedPassword';
        mockUser.password = hashedPassword;

        mockUsersRepository.prototype.findByEmail.mockResolvedValue(mockUser);
        mockAuthService.prototype.login.mockResolvedValue({
            accessToken: jwtTokens.accessToken,
            refreshToken: jwtTokens.refreshToken,
        });

        const response = await request(app)
            .post('/login')
            .send({ email: loginCredentials.email, password: loginCredentials.password });

        const isPasswordMatch = await bcryptCompare(loginCredentials.password, mockUser.password);
        expect(isPasswordMatch).toBe(true);
        expect(bcrypt.compare).toHaveBeenCalledTimes(1);
        expect(bcrypt.compare).toHaveBeenCalledWith(loginCredentials.password, mockUser.password);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            accessToken: jwtTokens.accessToken,
        });
        expect(mockUser.password).toBe(hashedPassword);
        expect(mockAuthService.prototype.login).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.login).toHaveBeenCalledWith({ email: loginCredentials.email, password: loginCredentials.password });
        expect(response.headers['set-cookie']).toBeDefined();
        expect(response.headers['set-cookie'][0]).toContain('jwt=refreshToken');
    });

    it('should return 404 if user not found', async () => {
        mockUsersRepository.prototype.findByEmail.mockResolvedValue(undefined);
        mockUsersRepository.prototype.findByUsername.mockResolvedValue(undefined);
        mockAuthService.prototype.login.mockRejectedValue(new NotFoundError('User not found'));

        const response = await request(app)
            .post('/login')
            .send({ email: loginCredentials.email, password: loginCredentials.password });

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'User not found' });
        expect(mockAuthService.prototype.login).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.login).toHaveBeenCalledWith({ email: loginCredentials.email, password: loginCredentials.password });
    });

    it('should return 401 if password is invalid', async () => {
        const bcryptCompare = jest.fn().mockResolvedValue(false);
        (bcrypt.compare as jest.Mock) = bcryptCompare;

        const hashedPassword = 'hashedPassword';
        mockUser.password = hashedPassword;

        mockUsersRepository.prototype.findByEmail.mockResolvedValue(mockUser);
        mockAuthService.prototype.login.mockRejectedValue(new UnauthorizedError('Invalid password'));

        const response = await request(app)
            .post('/login')
            .send({ email: loginCredentials.email, password: loginCredentials.password });

        const isPasswordMatch = await bcryptCompare(loginCredentials.password, mockUser.password);
        expect(isPasswordMatch).toBe(false);
        expect(bcrypt.compare).toHaveBeenCalledTimes(1);
        expect(bcrypt.compare).toHaveBeenCalledWith(loginCredentials.password, mockUser.password);

        expect(response.status).toBe(401);
        expect(response.body).toEqual({ error: 'Invalid password' });
        expect(mockUser.password).toBe(hashedPassword);
        expect(mockAuthService.prototype.login).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.login).toHaveBeenCalledWith({ email: loginCredentials.email, password: loginCredentials.password });
    });

    it('should return 422 if email and username are not provided', async () => {
        mockAuthService.prototype.login.mockRejectedValue(new ValidationError('"email" or "username" is required'));

        const response = await request(app)
            .post('/login')
            .send({ password: loginCredentials.password });

        expect(response.status).toBe(422);
        expect(response.body).toEqual({ error: '"email" or "username" is required' });
        expect(mockAuthService.prototype.login).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.login).toHaveBeenCalledWith({ password: loginCredentials.password });
    });

    it('should return 422 if password is not provided', async () => {
        mockAuthService.prototype.login.mockRejectedValue(new ValidationError('"password" is required'));

        const response = await request(app)
            .post('/login')
            .send({ email: loginCredentials.email });

        expect(response.status).toBe(422);
        expect(response.body).toEqual({ error: '"password" is required' });
        expect(mockAuthService.prototype.login).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.login).toHaveBeenCalledWith({ email: loginCredentials.email });
    });
});