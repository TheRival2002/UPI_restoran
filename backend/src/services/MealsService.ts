import { Meal } from '../entities/Meal';
import { MealsRepository } from '../repositories/MealsRepository';

export class MealsService {
    private readonly mealsRepository = new MealsRepository();

    public async findAll(): Promise<Meal[]> {
        return this.mealsRepository.findAll();
    }

    public async createMeal(meal: Meal) {
        if (!this.mealIsValid(meal))
            return;

        return this.mealsRepository.createMeal(meal);
    }

    private async mealIsValid(meal: Meal) {
        const mealName = meal.name.trim();
        const mealNameIsUnique = await this.mealsRepository.mealNameIsUnique(mealName);

        if (!mealNameIsUnique)
            throw new Error('Meal already exists!');

        if (meal.price < 0)
            throw new Error('Price can\'t be negative!');

        return true;
    }


}
