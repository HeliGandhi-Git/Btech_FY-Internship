//Javascript Class Methods:

// ▪ To access the method of an object, you need to call the method using its
// name followed by ().


class Class_Method {
    constructor(name) {
        this.name = name;
    }
    // defining method
    greet() {
        console.log(`Hello ${this.name} `);
    }
    color(){
        console.log("she wore green hoodie." )
    }
}
let person1 = new Class_Method('Heli');
let person2 = new Class_Method('Mann');
// accessing property
console.log(person1.name);
// accessing method
person1.greet();
person1.color();
console.log(person2.name);
person2.greet();



