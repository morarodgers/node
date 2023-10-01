//const num1 = 34
//const num2 = 21

const prompt = require('prompt-sync')();
const num1 = prompt("Enter your first number: ");
const num2 = prompt("Enter your second number: ");

function calc() {
    console.log('Here are the answers')
    console.log(`The sum is : ${num1 + num2}`)
    console.log(`The product is : ${num1 * num2}`)
    console.log(`The quotient is : ${num1 / num2}`)
    console.log(`The difference is : ${num1 - num2}`)
}

calc()