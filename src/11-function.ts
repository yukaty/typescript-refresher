
// The CalculateTotal type is a function type that takes two parameters:
type CalculateTotal = (price: number, tax?: number) => number;

const CalculateTotal: CalculateTotal = (price, tax = 0.1) => {
    if (typeof tax === 'undefined') {
        tax = 0.1;
    }
    return price + price * tax;
};

console.log(CalculateTotal(100)); // 110
console.log(CalculateTotal(1000, 0.15)); // 1150
console.log(CalculateTotal(1000, undefined)); // 1100
