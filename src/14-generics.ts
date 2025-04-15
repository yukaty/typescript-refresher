// Generics in TypeScript
// Generics allow you to create reusable components that work with a variety of types
// without losing type safety. They are like templates that can be used with different data types.
const echo = <T>(arg: T): T => {
    return arg;
}

console.log(echo<string>('Hello World'));
console.log(echo<number>(123));
console.log(echo<boolean>(true));
console.log(echo<string[]>(['Hello', 'World']));
console.log(echo<{ name: string }>({ name: 'John Doe' }));
// console.log(echo<number>('123')); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.