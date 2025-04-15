// Utility Types in TypeScript
// They are useful for creating new types based on existing ones, making your code more reusable and maintainable.

type Person = {
    id: number;
    name: string;
    email: string;
    age?: number;
    isActive: boolean;
};

// 1. Partial
// Partial<T> makes all properties of T optional.
type PartialPerson = Partial<Person>;
const person01: PartialPerson = {
    id: 1,
    name: "John Doe",
}
console.log(person01); // { id: 1, name: 'John Doe' }

// 2. Required
// Required<T> makes all properties of T required.
type RequiredPerson = Required<Person>;
const person02: RequiredPerson = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,  // optional property in Person but required here
    isActive: true,
}
console.log(person02);

// 3. Readonly
// Readonly<T> makes all properties of T read-only.
type ReadonlyPerson = Readonly<Person>;
const person03: ReadonlyPerson = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    isActive: true,
}
// person03.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
console.log(person03);

// 4. Pick
// Pick<T, K> creates a new type by picking the properties K from T.
type PickedPerson = Pick<Person, 'id' | 'name'>;
const person04: PickedPerson = {
    id: 1,
    name: "John Doe",
    // isActive: true, // Error: Type 'boolean' is not assignable to type 'never'
}
console.log(person04); // { id: 1, name: 'John Doe' }

// 5. Omit
// Omit<T, K> creates a new type by omitting the properties K from T.
type OmittedPerson = Omit<Person, 'email' | 'age'>;
const person05: OmittedPerson = {
    id: 1,
    name: "John Doe",
    // email: "john.doe@example.com", // Error: Type 'string' is not assignable to type 'never'
    isActive: true,
}
console.log(person05); // { id: 1, name: 'John Doe', isActive: true }