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

hero.heyMan() //this will print the heyMan functions
power.heyMan() //whereas this will throw error because object sits above in the heirarchy than arrays, fucntions and strings. thus it is not omnipotent