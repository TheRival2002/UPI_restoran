import { NotFoundError } from "../errors/HttpError";
import { DailyOffersRepository } from "../repositories/DailyOfffersRepository";

export class DailyOffersService{
    private readonly dailyOffersRepository = new DailyOffersRepository();

    public async findDailyOffer() : Promise<any> {
        const todaysDate = new Date().toISOString().split('T')[0];

        try {
            const todaysOffer = this.dailyOffersRepository.dailyOfferMeals(todaysDate);
            if (todaysOffer != null) 
                return todaysOffer;
            
            return await this.dailyOffersRepository.getClosestDateOffers(todaysDate);
        } catch (error) {
            throw new NotFoundError("Daily offer is not founded")
        }
    }
}