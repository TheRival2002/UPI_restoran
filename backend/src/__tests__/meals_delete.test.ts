import express from 'express';
import request from 'supertest';
import { createTestApp } from '../helpers/testApp';
import { MealsService } from '../services/MealsService';

jest.mock('../middleware/authMiddleware', () => {
    return jest.fn((_, __, next) => next());
});
jest.mock('../middleware/adminMiddleware', () => {
    return jest.fn((_, __, next) => next());
});
jest.mock('../services/MealsService');

describe('DELETE /meals/:id', () => {
    let app: express.Express;

    beforeEach(() => {
        app = createTestApp();
        jest.clearAllMocks();
    });

    it('should delete a meal and return 204 if successful', async () => {
        const mealId = 1;

        jest.spyOn(MealsService.prototype, 'deleteMeal').mockResolvedValue();

        const response = await request(app).delete(`/meals/${mealId}`);

        expect(response.status).toBe(204);
        expect(response.body).toEqual({});
    });

    it('should return 500 if an internal server error occurs', async () => {
        const mealId = 1;

        jest.spyOn(MealsService.prototype, 'deleteMeal').mockRejectedValue(
            new Error('Internal server error')
        );

        const response = await request(app).delete(`/meals/${mealId}`);

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Internal server error' });
    });
});
