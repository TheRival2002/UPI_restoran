import express from 'express';
import request from 'supertest';
import { createTestApp } from '../helpers/testApp';
import jwt from 'jsonwebtoken';

// --------------------------------------------------------------

jest.mock('jsonwebtoken', () => ({
    verify: jest.fn(),
    sign: jest.fn()
}));

describe('GET /refresh-token', () => {
    let app: express.Express;

    beforeEach(() => {
        app = createTestApp();

        jest.clearAllMocks();

        process.env.REFRESH_TOKEN_SECRET = 'test-refresh-secret';
        process.env.ACCESS_TOKEN_SECRET = 'test-access-secret';
    });

    it('should return 401 if no refresh token cookie exists', async () => {
        await request(app)
            .get('/refresh-token')
            .expect(401);
    });

    it('should return 401 if empty jwt cookie', async () => {
        await request(app)
            .get('/refresh-token')
            .set('Cookie', ['jwt='])
            .expect(401);
    });

    it('should return 403 if refresh token is invalid', async () => {
        (jwt.verify as jest.Mock).mockImplementation((_, __, callback) => {
            callback(new Error('Invalid token'), null);
        });

        const response = await request(app)
            .get('/refresh-token')
            .set('Cookie', ['jwt=invalid-refresh-token']);

        expect(response.status).toBe(403);
    });

    it('should return new access token if refresh token is valid', async () => {
        const mockDecodedRefreshToken = { id: 'user123' };
        const mockNewAccessToken = 'new-access-token';

        (jwt.verify as jest.Mock).mockImplementation((_, __, callback) => {
            callback(null, mockDecodedRefreshToken);
        });
        (jwt.sign as jest.Mock).mockReturnValue(mockNewAccessToken);

        const response = await request(app)
            .get('/refresh-token')
            .set('Cookie', ['jwt=valid-refresh-token']);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('accessToken', mockNewAccessToken);
        expect(jwt.sign).toHaveBeenCalledWith(
            { id: mockDecodedRefreshToken.id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' },
        );
    });

    it('should handle server errors properly', async () => {
        (jwt.verify as jest.Mock).mockImplementation(() => {
            throw new Error('Internal server error');
        });

        await request(app)
            .get('/refresh-token')
            .set('Cookie', ['jwt=valid-refresh-token'])
            .expect(500);
    });

    it('should use correct secret for token verification', async () => {
        const refreshToken = 'valid-refresh-token';

        await request(app)
            .get('/refresh-token')
            .set('Cookie', [`jwt=${refreshToken}`]);

        expect(jwt.verify).toHaveBeenCalledWith(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            expect.any(Function),
        );
    });

    it('should handle missing environment variables', async () => {
        delete process.env.REFRESH_TOKEN_SECRET;
        delete process.env.ACCESS_TOKEN_SECRET;

        await request(app)
            .get('/refresh-token')
            .set('Cookie', ['jwt=valid-refresh-token'])
            .expect(500);
    });

    it('should handle malformed JWT tokens', async () => {
        (jwt.verify as jest.Mock).mockImplementation((_, __, callback) => {
            callback(new Error('jwt malformed'), null);
        });

        await request(app)
            .get('/refresh-token')
            .set('Cookie', ['jwt=malformed.jwt.token'])
            .expect(403);
    });

    it('should handle expired refresh tokens', async () => {
        (jwt.verify as jest.Mock).mockImplementation((_, __, callback) => {
            callback(new Error('jwt expired'), null);
        });

        await request(app)
            .get('/refresh-token')
            .set('Cookie', ['jwt=expired-token'])
            .expect(403);
    });
});