// --
// Type Guards in TypeScript
// Type guards are a way to narrow down the type of a variable within a conditional block.
// They help TypeScript understand the type of a variable at runtime, allowing for more precise type checking and better code completion.
// --

// 1. Using `typeof` for primitive types
const printValue = (value: string | number): string => {
    if (typeof value === 'string') {
        return `String: ${value.toUpperCase()}`;
    } else {
        // TypeScript infers that value is a number here
        return `Number: ${value.toFixed(2)}`;
    }
}

console.log(printValue("Hello")); // String: HELLO
console.log(printValue(42)); // Number: 42.00
// console.log(printValue(true)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

// 2. Using `instanceof` for class instances
class Dog {
    bark() {
        return "Woof!";
    }
}
class Cat {
    meow() {
        return "Meow!";
    }
}
const printAnimalSound = (animal: Dog | Cat): string => {
    // instanceof checks if the object is an instance of a class
    // typeof returns 'object' if the object is an instance of a class
    if (animal instanceof Dog) {
        return animal.bark();
    } else {
        // TypeScript infers that animal is a Cat here
        return animal.meow();
    }
}
console.log(printAnimalSound(new Dog())); // Woof!
console.log(printAnimalSound(new Cat())); // Meow!


// 3. in operator for object properties
interface Bird {
    fly(): string;
}
interface Fish {
    swim(): string;
}
const printAnimalAction = (animal: Bird | Fish): string => {
    // in operator checks if a property exists in an object
    if ('fly' in animal) {
        return animal.fly();
    } else {
        // TypeScript infers that animal is a Fish here
        return animal.swim();
    }
}
class Sparrow implements Bird {
    fly() {
        return "Sparrow flies!";
    }
}
class Shark implements Fish {
    swim() {
        return "Shark swims!";
    }
}
console.log(printAnimalAction(new Sparrow())); // Sparrow flies!
console.log(printAnimalAction(new Shark())); // Shark swims!
// console.log(printAnimalAction(new Bird())); // Error: Argument of type 'Bird' is not assignable to parameter of type 'Bird | Fish'.

// 4. User-defined type guards
// User-defined type guards are functions that return a boolean and use the `is` keyword to narrow down the type.
interface Car {
    drive(): string;
}
interface Bicycle {
    pedal(): string;
}
// The function isCar checks if the vehicle is a Car
// by checking if it has a drive method. It returns a boolean and uses the `is` keyword to specify the type.
// This allows TypeScript to understand that if isCar returns true, the vehicle is a Car.
const isCar = (vehicle: Car | Bicycle): vehicle is Car => {
    return (vehicle as Car).drive !== undefined;
}
const printVehicleAction = (vehicle: Car | Bicycle): string => {
    if (isCar(vehicle)) {
        return vehicle.drive();
    } else {
        // TypeScript infers that vehicle is a Bicycle here
        return vehicle.pedal();
    }
}
class Tesla implements Car {
    drive() {
        return "Tesla drives!";
    }
}
class MountainBike implements Bicycle {
    pedal() {
        return "Mountain bike pedals!";
    }
}
console.log(printVehicleAction(new Tesla())); // Tesla drives!
console.log(printVehicleAction(new MountainBike())); // Mountain bike pedals!
