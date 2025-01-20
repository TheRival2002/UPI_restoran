import { NextFunction, Request, Response, Router } from "express";
import { MealsService } from "../services/MealsService";

// --------------------------------------------------------------

export class MealsController {
    private readonly mealsService;
    public readonly mealsRouter;
    private readonly authMiddleware = require("../middleware/authMiddleware");
    private readonly adminMiddleware = require("../middleware/adminMiddleware");

    constructor() {
        this.mealsRouter = Router();
        this.mealsService = new MealsService();

        this.mealsRouter.get("/meals", this.findAll.bind(this));
        this.mealsRouter.post(
            "/meals",
            this.authMiddleware,
            this.adminMiddleware,
            this.createMeal.bind(this)
        );
        this.mealsRouter.delete(
            "/meals/:id",
            this.authMiddleware,
            this.adminMiddleware,
            this.deleteMeal.bind(this)
        );
        this.mealsRouter.get("/meals/:id", this.findbyId.bind(this));
    }

    private async findAll(_: Request, res: Response, next: NextFunction) {
        try {
            const meals = await this.mealsService.findAll();
            res.status(200).json(meals);
        } catch (error) {
            next(error);
        }
    }

    private async createMeal(req: Request, res: Response, next: NextFunction) {
        try {
            const newMeal = await this.mealsService.createMeal(req.body);

            if (!newMeal) {
                res.status(422).json({ error: "Invalid input data" });
                return;
            }
            res.status(201).json(newMeal);
        } catch (error) {
            next(error);
        }
    }

    private async deleteMeal(req: Request, res: Response, next: NextFunction) {
        try {
            const mealId = +req.params.id;
            await this.mealsService.deleteMeal(mealId);

            res.sendStatus(204);
        } catch (error) {
            next(error);
        }
    }

    private async findbyId(req: Request, res: Response, next: NextFunction) {
        try {
            const mealId = +req.params.id;
            const meal = await this.mealsService.findbyId(mealId);

            res.status(200).json(meal);
        } catch (error) {
            next(error);
        }
    }
}
