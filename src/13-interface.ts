// Interface is a way to define the structure of an object
interface Shop {
    readonly id: number;
    name: string;
    location?: string;
}

const shopA: Shop = {
    id: 1,
    name: 'Shop A',
    location: 'Location A',
};

const shopB: Shop = {
    id: 2,
    name: 'Shop B', // Error if you try not to assign a value to name
    location: 'Location B',
};

const shopC: Shop = {
    id: 3,
    name: 'Shop C',
    // location is optional, so you can omit it
};

console.log(shopA);
console.log(shopB);
console.log(shopC);
// shopC.id = 999; // Error if you try to change the value of id
