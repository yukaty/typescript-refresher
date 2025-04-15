// Type Inference in TypeScript
// TypeScript can infer types based on the assigned value.

let year = 2025;
// year = '2026'; // Error: Type 'string' is not assignable to type 'number'
year = 2026;
console.log(year); // Output: 2026