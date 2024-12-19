export class Meal {
    id: Number;
    name: String;
    description: String | undefined;
    price: Number;
    image: String | undefined;
    mealCategoryId: Number;

    constructor(id: Number, name: String, description: String | undefined, price: Number, image: String | undefined, mealCategoryId: Number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.mealCategoryId = mealCategoryId;
    }
}
