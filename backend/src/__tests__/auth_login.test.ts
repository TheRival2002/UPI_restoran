import express from 'express';
import request from 'supertest';
import { LoginCredentialsDto } from '../entities/types/auth.dto';
import { createTestApp } from '../helpers/testApp';
import { AuthService } from '../services/AuthService';

// --------------------------------------------------------------

jest.mock('../services/AuthService');

const mockAuthService = AuthService as jest.MockedClass<typeof AuthService>;

describe('POST /login', () => {
   let app: express.Express;

    beforeEach(() => {
        app = createTestApp();

        jest.clearAllMocks();
    });

    const loginData: LoginCredentialsDto = {
        email: 'john@email.com',
        password: 'password123',
    };

    it('should log in a user', async () => {
        mockAuthService.prototype.login.mockResolvedValue({
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
        });

        const response = await request(app)
            .post('/login')
            .send(loginData);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            accessToken: 'accessToken',
        });
        expect(mockAuthService.prototype.login).toHaveBeenCalledTimes(1);
        expect(mockAuthService.prototype.login).toHaveBeenCalledWith(loginData);
        expect(response.headers['set-cookie']).toBeDefined();
        expect(response.headers['set-cookie'][0]).toContain('jwt=refreshToken');
    });
});