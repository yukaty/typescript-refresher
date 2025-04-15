// The resulting type will have all the properties of the combined types
type Title = {
    title: string;
    subtitle?: string;    // subtitle is optional
};
type Price = {
    price: number;
    currency: string;
    discount?: number;   // discount is optional
};
// Intersection type is used to combine multiple types into one
// ampersand (&) is used to combine types
type Book = Title & Price;

const book : Book = {
    title: 'The Great Gatsby',
    price: 10.99,
    currency: 'CAD'
};
console.log(book);