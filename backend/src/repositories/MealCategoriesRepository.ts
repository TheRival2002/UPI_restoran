export class MealCategoriesRepository {
    private readonly database = require('./../database/db');

    public async mealCategoryExists(mealCategoryId: number) {
        const query = `SELECT COUNT(*)
                       FROM meal_categories
                       WHERE id = $1`;
        const values = [mealCategoryId];
        const response = await this.database.query(query, values);

        return response.rows[0].count === '1';
    }
}