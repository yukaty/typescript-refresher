// Union Types are used when you want to allow a variable to be one of several types.
let userId: string | number;

userId = 101;
console.log(userId); // 101
userId = 'user01';
console.log(userId); // user01

// userId = null; // invalid, null is not assignable to string | number


