// Type aliases allow you to create a new name for a type

type User = {
    id: number;
    name: string;
}

const user1: User = {
    id: 1,
    name: 'John Doe'
}

const user2: User = {
    id: 2,
    name: 'Jane Smith'
}

console.log(user1);
console.log(user2);

// If you don't use type alias, it's a bit verbose and unreadable
const user3: {
    id: number;
    name: string;
} = {
    id: 3,
    name: 'Alice Brown'
};