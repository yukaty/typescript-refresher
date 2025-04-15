// Tuple in TypeScript
// A tuple is a fixed-length array where each element can have a different type.

let person: [string, number] = ['John', 30];
// person = [25, 'Jane']; // Error: Type 'number' is not assignable to type 'string'.
person = ['Jane', 25]; // OK
console.log(person); // ['Jane', 25]
