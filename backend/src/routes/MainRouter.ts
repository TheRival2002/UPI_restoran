import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { MealsController } from '../controllers/MealsController';
import { DailyOffersController } from '../controllers/DailyOffersController';
import { UsersController } from '../controllers/UsersController';

// --------------------------------------------------------------

export class MainRouter {
    // controllers
    private readonly mealsController = new MealsController();
    private readonly authController = new AuthController();
    private readonly dailyController = new DailyOffersController();
    private readonly usersController = new UsersController();

    public readonly routes;

    constructor() {
        this.routes = Router();
        this.defineRoutes();
    }

    private defineRoutes() {
        this.routes.use(this.authController.authRouter);
        this.routes.use(this.mealsController.mealsRouter);
        this.routes.use(this.dailyController.dailyOffersRouter);
        this.routes.use(this.usersController.usersRouter);
    }
}
