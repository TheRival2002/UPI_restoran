import request from 'supertest';
import express from 'express';
import { Meal } from '../entities/Meal';
import { createTestApp } from '../helpers/testApp';
import { MealsService } from '../services/MealsService';

// --------------------------------------------------------------------------------

jest.mock('../services/MealsService');
jest.mock('../middleware/authMiddleware', () => {
    return jest.fn((_, __, next) => next());
});

const mockMealsService = MealsService as jest.MockedClass<typeof MealsService>;

describe('MealsController - findAll', () => {
    let app: express.Express;

    beforeEach(() => {
        app = createTestApp();

        jest.clearAllMocks();
    });

    it('should return a list of meals with status 200', async () => {
        const mockMeals: Meal[] = [
            {
                id: 1,
                name: 'Pizza',
                description: 'Cheesy and delicious',
                price: 10.99,
                image: 'pizza.jpg',
                meal_category_id: 1,
            },
            {
                id: 2,
                name: 'Burger',
                description: 'Juicy beef burger',
                price: 8.99,
                image: 'burger.jpg',
                meal_category_id: 2,
            },
        ];

        mockMealsService.prototype.findAll.mockResolvedValue(mockMeals);

        const response = await request(app).get('/meals');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockMeals);
        expect(mockMealsService.prototype.findAll).toHaveBeenCalledTimes(1);
    });

    it('should return an empty list with status 200 when no meals are found', async () => {
        mockMealsService.prototype.findAll.mockResolvedValue([]);

        const response = await request(app).get('/meals');

        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
        expect(mockMealsService.prototype.findAll).toHaveBeenCalledTimes(1);
    });

    it('should return status 500 when an error occurs', async () => {
        mockMealsService.prototype.findAll.mockRejectedValue(new Error('Internal Server Error'));

        const response = await request(app).get('/meals');

        expect(response.status).toBe(500);
        // expect(response.body).toEqual({ error: 'Internal Server Error' });
        expect(mockMealsService.prototype.findAll).toHaveBeenCalledTimes(1);
    });
});
