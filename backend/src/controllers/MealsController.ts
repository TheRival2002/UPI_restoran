import { Request, Response, Router } from 'express';
import { MealsService } from '../services/MealsService';

export class MealsController {
    private readonly mealsService;
    public readonly mealsRouter;

    constructor() {
        this.mealsRouter = Router();
        this.mealsService = new MealsService();

        this.mealsRouter.get('/meals', this.findAll.bind(this));
    }

    private async findAll(_: Request, res: Response) {
        try {
            const meals = await this.mealsService.findAll();
            res.status(200).json(meals);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }


}
