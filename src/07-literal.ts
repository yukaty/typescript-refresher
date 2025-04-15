// Literal Types
// Literal types allow you to specify the exact value a string or number can have.
let requestStatus: 'pending' | 'success' | 'error';

// requestStatus = 'started'; // error
requestStatus = 'pending'; // valid

console.log(requestStatus);