import express from 'express';
import request from 'supertest';
import { createTestApp } from '../helpers/testApp';

// --------------------------------------------------------------

jest.mock('../middleware/authMiddleware', () => {
    return jest.fn((_, __, next) => next());
});

describe('GET /logout', () => {
    let app: express.Express;

    beforeEach(() => {
        app = createTestApp();

        jest.clearAllMocks();
    });

    it('should log out a user', async () => {
        const response = await request(app)
            .get('/logout')
            .set('Cookie', [ 'jwt=refreshToken' ]);

        expect(response.status).toBe(204);
        expect(response.headers['set-cookie']).toBeDefined();
        expect(response.headers['set-cookie'][0]).toContain('jwt=;');
    });

    it('should return 204 if user is already logged out', async () => {
        const response = await request(app)
            .get('/logout');

        expect(response.status).toBe(204);
        expect(response.headers['set-cookie']).toBeUndefined();
    });

    it('should return 204 if cookies exist but no JWT cookie', async () => {
        const response = await request(app)
            .get('/logout')
            .set('Cookie', ['otherCookie=someValue'])
            .expect(204);

        expect(response.headers['set-cookie']).toBeUndefined();
    });

    it('should handle multiple cookies correctly', async () => {
        const response = await request(app)
            .get('/logout')
            .set('Cookie', ['jwt=validToken', 'otherCookie=someValue'])
            .expect(204);

        expect(response.headers['set-cookie'][0]).toContain('jwt=;');
    });

    it('should clear cookie with correct attributes', async () => {
        const response = await request(app)
            .get('/logout')
            .set('Cookie', ['jwt=validToken'])
            .expect(204);

        const cookieHeader = response.headers['set-cookie'][0];
        expect(cookieHeader).toMatch(/Path=\//);
        expect(cookieHeader).toMatch(/HttpOnly/);
        expect(cookieHeader).toMatch(/Expires/);
        expect(cookieHeader).toMatch(/jwt=;/);
    });

    it('should handle empty jwt cookie value', async () => {
        const response = await request(app)
            .get('/logout')
            .set('Cookie', ['jwt=']);

        expect(response.status).toBe(204);
        expect(response.headers['set-cookie']).toBeUndefined();
    });
});