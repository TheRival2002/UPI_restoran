import { Router, Request, Response, NextFunction } from 'express';
import { DailyOffersService } from '../services/DailyOffersService';


export class DailyOffersController {
    private readonly dailyOffersService;
    public readonly dailyOffersRouter;

    constructor() {
        this.dailyOffersRouter = Router();
        this.dailyOffersService = new DailyOffersService();

        this.dailyOffersRouter.get('/daily-offers', this.getDailyOffers.bind(this));
    }

    private async getDailyOffers(_: Request, res: Response, next: NextFunction): Promise<void> {
        try {           
            const offers = await this.dailyOffersService.findDailyOffer();
            res.status(200).json({ offers });
        } catch (error) {            
            next(error);
        }
    }
}
