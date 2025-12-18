//Object in class.

//How to create objects from a class?
// ▪We can create several objects from the same class, with each object having
// its own set of properties.
// ▪ In order to work with a class, we need to create an object from it.
// ▪ In order to create an object, we use the new keyword.
// ▪ Example :
// ▪bmw = new Car ();
// ▪mercedes = new Car 


// class Object{
//     constructor(){
//         console.log("car class constructor called.")

//     }
// }
// //object

// myobj = new Object();


//Creating JavaScript Class with Multiple Object:

// ▪ The constructor() method inside a class gets called automatically each time
// an object is created.


// // creating a class
// class Object_Class {
//     constructor(name) {
//         this.name = name;
//     }
// }
// // creating an object
// const person1 = new Object_Class('Heli');
// const person2 = new Object_Class('Mann');
// console.log(person1.name); 
// console.log(person2.name); 


//Object with Multiple Parameter :

// ▪We can pass multiple parameter in Object
// ▪We can access member variable using object.
// ▪ Object.variablename


// creating a class
class Object_Class{
constructor(name,age) {
this.myname = name;
this.myage = age;
}
}
// creating an object
const myobj = new Object_Class("heli",21);

//get value 
console.log(myobj)

console.log(myobj.myname); // Akash
console.log(myobj.myage); // Aarav


