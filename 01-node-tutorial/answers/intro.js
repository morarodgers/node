console.log('I have started my node course')
console.log('This is going to be amazing')
console.log('Let us do some calculations')

// Get input from the user
const prompt = require('prompt-sync')();
const num1 = prompt("Enter your first number: ");
const num2 = prompt("Enter your second number: ");

// Carry out arithmetic operations
const sum = num1 + num2;
const diff = num1 - num2;
const prod = num1 * num2;
const quot = num1 / num2;

// Print results
console.log(`The sum of your numbers is: ${sum}`);
console.log(`The difference of your numbers is: ${diff}`);
console.log(`The product of your numbers is: ${prod}`);
console.log(`The quotient of your numbers is: ${quot}`);

console.log('Enjoy your day!')