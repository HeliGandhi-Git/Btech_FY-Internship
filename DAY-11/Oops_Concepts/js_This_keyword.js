//The this keyword

// ▪ The this keyword indicates that we use the class's own methods and
// properties, and allows us to have access to them within the class's scope.
// ▪ The this keyword allows us to approach the class properties and methods
// from within the class using the following syntax:


//syntax

// class This_Keyword{

//     constructor(name) {
//         this.name = name
        
//     }

// }

//Access Property Outside Class Using Object:

//We can access variable
//▪ Objectname.variablename

//Calling Member Variable using Object.

class This_Keyword{
    constructor(name) {
        console.log("Hey! My name is ")
        this.name = name 
        
    }
}

//create object.
let myobj = new This_Keyword("Heli");

//get value.
console.log(myobj.name)