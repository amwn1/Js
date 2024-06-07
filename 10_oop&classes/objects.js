function multiple(num){
    return num *5
}

// console.log(multiple(5))
// console.log(multiple.prototype)
// everything is an object in JS

function createUSer(username, score){
    this.username = username; // current context is set here
    this.score = score
}
// Note: that the function is also an object . 

createUSer.prototype.increment = function() {
    this.score++; // you need to give context here as we need to call 
}

createUSer.prototype.print = function(){
    console.log(`Printing the score ${this.score}`)
}

const chai = new createUSer("Aman",18) // this will be printed
const tea =  createUSer("malik",23) 

chai.print()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/