//advance javascript learning
//ECMA Script 2015
//ES6 


// TOPICS :1. Arrow Function
// 2. Spread operator
// 3. Rest Parameter
// 4. Default Parameters
// 5. forEach() loop

 
//Javascript run in Backend

console.log("ADVANCE JS") // RUN IN TERMINAL AS  node (FILE NAME) "advance-js.js"  
console.log("ADVANCE JS Arrow Function") 

//1.Arrow Function
// In the ES6 version, you can use arrow functions to create function expressions.
//to define an arrow function :  Use the (arguments) => expression
//to define an arrow function that has multiple statements :  Use the (arguments) => { statements }


// Function expression
var x = function (x, y) {
return x * y;
};
console.log(x(10, 20)); //200


//Arrow Function
var x = (x, y) => x * y;
console.log(x(5, 3)); //15

//There are four types of user define function:-

//Type 1: Arrow Function With No Argument, No Return Type
//If a function doesn't take any argument, then you should use empty parentheses. 


// ARROW Function expression:
//example-1
let msg = () => console.log("Hello World")
msg(); // Hello World


//Example 2


let ans = () => console.log(10 + 20);
ans();

//Type 2: Arrow Function With Argument, No Return Type 
//▪ If a function has only one argument, you can omit the parentheses. 

//Arrow Function

//Example 1

let msg1 = x => console.log(x)
msg1("Hello World"); // Hello World

//Example 2

let ans2 = (n1,n2) => console.log(n1 + n2);
ans2(10,20);

//Type 3: Arrow Function with Argument, Return Type

//Arrow Function

let add = (x, y) => x + y;
console.log(add(10, 20)); // 30;


//Type 4: Arrow Function with No Argument, Return Type

//Arrow Function

let add1 = () => 10+20;
console.log(add1()); // 30;

// Arrow Function as an Expression:
//▪ You can also dynamically create a function and use it as an expression.

let age = 5;
let show = (age < 18) ?
() => console.log('Invalid age') :
() => console.log('Valid age');
show(); // Invalid age

//Multiline Arrow Functions:
//▪ If a function body has multiple statements, you need to put them inside curly brackets {}.

let sum = (a, b) => {
let result = a + b;
return result;
}
let result1 = sum(5,7);
console.log(result1); // 12


console.log("previous topic recap.....")





// 1. simple Function
let welcome = () => console.log("Welcome sir.");
welcome();

// 2. Parameter
let greeting = (x) => console.log("Hello guys, Myself " + x + " Welcome to My Advanced JS folder.")
greeting("Heli Gandhi.");

// 3. Parameter with Return value 
let sum1 = (x,y) => x + y;
var ans1 = sum(10,20);
console.log("Sum is : "+ ans1);

// 4. Ternary Condition 
let age1 = 25;
let show1 = (age1 < 18) ?
() => console.log('Invalid age') :
() => console.log('Valid age');
show1();// Invalid age

// Return Value Multiple line 
let addition = (a,b) =>{
     let result = a + b;
     return result;
}
let result = addition(5,7);
console.log(result)




