// Object Types in TypeScript

const user: {
    readonly name: string,
    age?: number,           // optional property
    email: string
} = {
    name: 'John Doe',
    email: 'john.doe@example.com'
};

// user.name = 'Jane Smith'; // Error: Cannot assign to 'name' because it is a read-only property.
user.age = 30; // OK
console.log(user);