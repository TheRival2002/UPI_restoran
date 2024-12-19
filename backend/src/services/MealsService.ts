import { Meal } from '../entities/Meal';
import { MealsRepository } from '../repositories/MealsRepository';

export class MealsService {
    private mealsRepository = new MealsRepository();

    public async findAll(): Promise<Meal[]> {
        return this.mealsRepository.findAll();
    }
}
