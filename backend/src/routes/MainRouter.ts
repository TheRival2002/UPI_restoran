import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { MealsController } from '../controllers/MealsController';

// --------------------------------------------------------------

export class MainRouter {
    // controllers
    private readonly mealsController = new MealsController();
    private readonly authController = new AuthController();

    // middleware
    private readonly authMiddleware = require('../middleware/authMiddleware');

    public readonly routes;

    constructor() {
        this.routes = Router();
        this.defineRoutes();
    }

    private defineRoutes() {
        this.routes.use(this.authController.authRouter);

        this.routes.use(this.authMiddleware);

        this.routes.use(this.mealsController.mealsRouter);
    }
}
