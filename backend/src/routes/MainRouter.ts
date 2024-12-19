import { Router } from 'express';
import { MealsController } from '../controllers/MealsController';

export class MainRouter {
    private mealsController;
    public routes;

    constructor() {
        this.routes = Router();
        this.mealsController = new MealsController();

        this.routes.use(this.mealsController.mealsRouter);
    }
}
