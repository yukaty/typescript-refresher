// Access Modifiers in TypeScript
class Product  {
    public name: string;          // public - accessible from anywhere
    private price: number;        // private - accessible only within the class
    protected category: string;   // protected - accessible within the class and subclasses
    readonly id: number;          // readonly - can only be set at initialization or in the constructor

    constructor(name: string, price: number, category: string, id?: number) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.id = id || Math.floor(Math.random() * 1000); // Assign a random ID if not provided
    }

    // return void means no return value
    describe(): void {
        console.log('---- Accecss within class ----');
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
        console.log(`Category: ${this.category}`);
    }
}

// Example of using the Product class
class Drink extends Product {

    describe(): void {
        console.log('---- Accecss within subclass ----');
        console.log(`Product: ${this.name}`);
        // console.log(`Price: ${this.price}`); // Error: Property 'price' is private and only accessible within class 'Product'.
        console.log(`Category: ${this.category}`);
    }
}

const shampoo = new Product('Shampoo', 5.99, 'Personal Care');
shampoo.describe();

const coffee = new Drink('Coffee', 2.99, 'Beverage');
coffee.describe();

console.log('---- Accecss outside class ----');
console.log(shampoo); // Accessible
console.log(shampoo.name); // Accessible
// console.log(shampoo.price); // Error: Property 'price' is private and only accessible within class 'Product'.
// console.log(shampoo.category); // Error: Property 'category' is protected and only accessible within class 'Product' and its subclasses.
console.log(shampoo.id); // Accessible
// shampoo.id = 123; // Error: Cannot assign to 'id' because it is a read-only property.

console.log(coffee); // Accessible
console.log(coffee.name); // Accessible
// console.log(coffee.price); // Error: Property 'price' is private and only accessible within class 'Product'.
// console.log(coffee.category); // Error: Property 'category' is protected and only accessible within class 'Product' and its subclasses.
