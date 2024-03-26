// let a  = 10 
// const b = 20
// var c = 30 // we will study the differnce between them in regarding to block

// {} // curly braces are scopes 

if(true){
let a  = 10 
const b = 20
var c = 30
}

console.log(a) // This wont run
console.log(b) // This wont run either
console.log(c) // This will be declared !! Which is a huge problem , var c should no go out of scope

// var should be avoided as it does not adhere to scope protocols !

// Block scope 
// Global scope , should be studied 

// INT Q ) difference between scopes 