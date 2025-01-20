import { Meal } from "../entities/Meal";
import {
    ConflictError,
    NotFoundError,
    ValidationError,
} from "../errors/HttpError";
import { MealCategoriesRepository } from "../repositories/MealCategoriesRepository";
import { MealsRepository } from "../repositories/MealsRepository";
import { validateCreateMeal } from "../validation_schema/Meal";

// --------------------------------------------------------------------------------

// ----------------------------------------------------------------------

export class MealsService {
    private readonly mealsRepository = new MealsRepository();
    private readonly mealCategoriesRepository = new MealCategoriesRepository();

    public async findAll(): Promise<Meal[]> {
        return this.mealsRepository.findAll();
    }

    public async createMeal(meal: Meal) {
        const validatedMeal = await this.mealIsValid(meal);

        if (!validatedMeal) return;

        return this.mealsRepository.createMeal(validatedMeal);
    }

    public async deleteMeal(mealId: number): Promise<void> {
        return this.mealsRepository.deleteMeal(mealId);
    }

    private async mealIsValid(meal: Meal): Promise<Meal> {
        const { error, value: validatedMeal } = validateCreateMeal(meal);

        if (error) throw new ValidationError(error.message);

        const mealNameIsUnique = await this.mealsRepository.mealNameIsUnique(
            validatedMeal.name
        );
        if (!mealNameIsUnique) throw new ConflictError("Meal already exists!");

        const mealCategoryExists =
            await this.mealCategoriesRepository.mealCategoryExists(
                validatedMeal.mealCategoryId
            );
        if (!mealCategoryExists)
            throw new ValidationError("Meal category does not exist!");

        return validatedMeal;
    }
    public async findbyId(mealId: number): Promise<Meal | null> {
        const meal = await this.mealsRepository.findById(mealId);

        if (!meal) {
            throw new NotFoundError("Meal is not found!");
        }
        return meal;
    }
}
