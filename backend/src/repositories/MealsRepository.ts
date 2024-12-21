import { Meal } from '../entities/Meal';

export class MealsRepository {
    private readonly database = require('./../database/db');

    public async findAll(): Promise<Meal[]> {
        const query = 'SELECT * FROM meals';
        const response = await this.database.query(query);

        return response.rows;
    }
}
