let my = "Aman    "
console.log(my.length) //8

console.log(my.trim().length) //4 , this works but this isn't ideal 

let hero = ['Aman','Malik','Rajesh']

let power = {
    Aman: "Wit",
    Malik: "Rekt",
    Rajesh: "rahs",

    AmanPower: function(){
        console.log(`Spidy power is ${this.Aman}`)
    }
}

// making a prototye in the object as in theory we know , arrays, function and string all go through object thus making them universal in all those .

Object.prototype.exampleFun = function(){
    console.log("This is omnipotent in all the arrays and functions")
}

hero.exampleFun(); //
power.exampleFun(); // both will log in the prototype declared : op : This is omnipotent in all the arrays and functions

Array.prototype.heyMan = function(){ //only giving power to arrays 
    console.log("Aman says hi")
}

// hero.heyMan() //this will print the heyMan functions
// power.heyMan() //whereas this will throw error because object sits above in the heirarchy than arrays, fucntions and strings. thus it is not omnipotent.

const Teacher = { // creating an object here

}

const support = {
    isAvailable: true
}

const ta = {
    makeAssignment: 'JS', 
    fullTime: true,
    __proto__: support  // `ta` will access properties of `support`
}

// No need to set prototype of `support` to `ta`. Instead, make sure `ta` inherits from `support`.
Object.setPrototypeOf(ta, support); // This ensures `ta` inherits properties from `support`

console.log(ta.isAvailable); // true

let another = "EXMAPLE    "
String.prototype.trueLength= function(){
    console.log(`${this}`); // example 
    // console.log(`${this.name}`)
    console.log(`Truw length is ${this.trim().length}`)
}

"malik".trueLength()
"Hi".trueLength()