
export class DailyOffersRepository{
    private readonly database = require('../database/db')

    public async dailyOfferMeals()    {
        const todaysDate = new Date().toISOString().split('T')[0];
        
        try {
            const queryToday = `
                SELECT meal_id
                FROM daily_offers
                WHERE daily_offer_date = $1;
            `;

            const resultToday = await this.database.query(queryToday, [todaysDate]);

            if (resultToday.rows.length > 0) {
                return resultToday.rows.map((row: { meal_id: number }) => row.meal_id)
            }
            
            return await this.getClosestDateOffers(todaysDate);
        } catch (error) {
            console.error('Error fetching daily offers:', error);
            throw new Error('Failed to fetch daily offers.');
        }
        
    }

    private async getClosestDateOffers(todaysDate: string): Promise<number[]> {
        const queryClosestDate = `
            SELECT meal_id
            FROM daily_offers
            WHERE daily_offer_date = (
                SELECT MAX(daily_offer_date)
                FROM daily_offers
                WHERE daily_offer_date <= $1
            );
        `;

        const resultClosestDate = await this.database.query(queryClosestDate, [todaysDate]);
        return resultClosestDate.rows.map((row: { meal_id: number }) => row.meal_id);
    }
}