// Array in TypeScript

const fruits: string[] = ['apple', 'banana', 'cherry'];
fruits.push('orange');
fruits[0] = 'kiwi';
// fruits[1] = 42; // Error: Type 'number' is not assignable to type 'string'.
console.log(fruits); // ['kiwi', 'banana', 'cherry', 'orange']