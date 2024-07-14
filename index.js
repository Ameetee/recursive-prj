// Fibonacci Sequence:
// function fibonacci(n) {
//     if (n === 0) {
//         return 0; // Base case: Fibonacci(0) = 0
//     } else if (n === 1) {
//         return 1; // Base case: Fibonacci(1) = 1
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
//     }
// }

// // Example usage:
// const n = 6;
// console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);




// Power Function: 
function power(base, exponent) {
    // Base case: exponent is 0, any number to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    } 
    // Base case: exponent is 1, any number to the power of 1 is the number itself
    else if (exponent === 1) {
        return base;
    } else {
        // Recursive case: base^exponent = base * base^(exponent-1)
        return base * power(base, exponent - 1);
    }
}

// Example usage:
const base = 2;
const exponent = 5;
console.log(`${base}^${exponent} = ${power(base, exponent)}`);
