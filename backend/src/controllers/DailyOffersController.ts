import { Router, Request, Response, NextFunction } from 'express';
import { DailyOffersRepository } from '../repositories/DailyOfffersRepository';

export class DailyOffersController {
    private readonly dailyOffersRepository;
    public readonly dailyOffersRouter;

    constructor() {
        this.dailyOffersRouter = Router();
        this.dailyOffersRepository = new DailyOffersRepository();

        this.dailyOffersRouter.get('/daily-offers', this.getDailyOffers.bind(this));
    }

    private async getDailyOffers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const offers = await this.dailyOffersRepository.dailyOfferMeals();
            res.status(200).json({ offers });
        } catch (error) {            
            next(error);
        }
    }
}
