// JavaScript forEach() loop

// The forEach() array method loops through any array, executing a provided 
// function once for each array element in ascending index order. 
// This function is referred to as a callback function.

// Example 1

// Define an array of numbers
const number1 = [1, 2, 3, 4, 5];
// Use forEach to iterate over each number in the array
number1.forEach(function (number1) {
    console.log(number1);
});

// Example 2 (Arrow Function)

// Define an array of numbers
const number2 = [1, 2, 3, 4, 5];
// Use forEach with an arrow function 
// to print each number
number2.forEach((number2) => {
    console.log(number2);
});

// Example 3 (With Index)

// Define an array of numbers
const numbers = [10, 20, 30];
// Use forEach with an arrow function to print each number
numbers.forEach((numbers, index, array) => {
console.log(`Index ${index}: ${numbers}`);
console.log(`Original array: ${array}`);
});