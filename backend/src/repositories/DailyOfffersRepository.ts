
export class DailyOffersRepository{
    private readonly database = require('../database/db')

    public async dailyOfferMeals(todaysDate: string){       

        const queryToday = `
            SELECT meals.*
            FROM daily_offers
            JOIN meals ON daily_offers.meal_id = meals.id
            WHERE daily_offers.daily_offer_date = $1;
        `;

        const resultToday = await this.database.query(queryToday, [todaysDate]);          
        return resultToday.rows;
    }

    public async getClosestDateOffers(todaysDate: string): Promise<number[]> {
        const queryClosestDate = `
                SELECT meals.*
                FROM daily_offers
                JOIN meals ON daily_offers.meal_id = meals.id
                WHERE daily_offers.daily_offer_date = (
                    SELECT MAX(daily_offer_date)
                    FROM daily_offers
                    WHERE daily_offer_date <= $1
                );
            `;

        const resultClosestDate = await this.database.query(queryClosestDate, [todaysDate]);
        return resultClosestDate.rows;
    }
}