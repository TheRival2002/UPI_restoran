import { Router } from 'express';
import { MealsController } from '../controllers/MealsController';

export class MainRouter {
    private readonly mealsController = new MealsController();
    public readonly routes;

    constructor() {
        this.routes = Router();
        this.defineRoutes();
    }

    private defineRoutes() {
        this.routes.use(this.mealsController.mealsRouter);
    }
}
