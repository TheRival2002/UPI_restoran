import express from 'express';
import request from 'supertest';
import { createTestApp } from '../helpers/testApp';
import { mockMeal } from './constants/meal';
import { MealsService } from '../services/MealsService';

// Mockiramo middleware
jest.mock('../middleware/authMiddleware', () => {
    return jest.fn((_, __, next) => next());
});
jest.mock('../middleware/adminMiddleware', () => {
    return jest.fn((_, __, next) => next());
});
jest.mock('../services/MealsService');

describe('POST /meals', () => {
    let app: express.Express;

    beforeEach(() => {
        app = createTestApp();
        jest.clearAllMocks();
    });

    it('should create a new meal with valid data', async () => {
        jest.spyOn(MealsService.prototype, 'createMeal').mockResolvedValue(mockMeal);

        const response = await request(app)
            .post('/meals')
            .send(mockMeal);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(mockMeal);
    });

    it('should return 422 for invalid input', async () => {
        // Mockiramo da se vrati `null` za nevalidni unos
        jest.spyOn(MealsService.prototype, 'createMeal').mockResolvedValue(undefined);

        const invalidMeal = {}; // Prazan objekt kao nevažeći unos
        const response = await request(app)
            .post('/meals')
            .send(invalidMeal);

        expect(response.status).toBe(422);
        expect(response.body).toEqual({ error: 'Invalid input data' });
    });

    it('should return 500 for service error', async () => {
        jest.spyOn(MealsService.prototype, 'createMeal').mockRejectedValue(new Error('Internal server error'));

        const response = await request(app)
            .post('/meals')
            .send(mockMeal);

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Internal server error' });
    });
});
