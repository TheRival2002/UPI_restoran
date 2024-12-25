import { Meal } from '../entities/Meal';

export class MealsRepository {
    private readonly database = require('./../database/db');

    public async findAll(): Promise<Meal[]> {
        const query = 'SELECT * FROM meals';
        const response = await this.database.query(query);

        return response.rows;
    }

    public async createMeal(meal: Meal) {
        const query = `INSERT INTO meals (name, description, price, image, meal_category_id)
                       VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const values = [meal.name, meal.description, meal.price, meal.image, meal.mealCategoryId];
        const response = await this.database.query(query, values);

        return response.rows[0];
    }
}
