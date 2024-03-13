// # Primitive datatypes (these are call by value , original data is copied and the changes are not reflected in the original) 
// 7 types : String , Number , Boolean , null , undefined , Symbol , Bigint

// # Non-Primitive datatypes ( call by reference , reference to the original data in the address is given)
// Array , Objects , Function 

// Q) Is Js a Dynamically typed or Statically typed ?
// A) It is dynamically typed because For this category of programming languages, there’s 
// no requirement to explicitly state the data type during variable declarations. The language system
// is able to detect the type of a variable at runtime
// REFERENCE FROM https://shorturl.at/lyzDG

// const id = Symbol('123')
// const anotherId = Symbol('123') // Symbols used to give unique Id's

// console.log( id == anotherId) // op -> false 

// const num = 23345252523n // the n at the last converts the the number to big int

// const food = ["brownie" , "halwa" , "biryani"] // array
// let myObj = {
//     name :"Aman",
//     age:21
// }                                            // object

// const myFunction = function(){
//     console.log("Hello World")
// }                                           // function

// let ex = null ;
// console.log(typeof ex); // the return typeof of null will give you null

// console.log(typeof myFunction)
// console.log(typeof food)
// console.log(typeof id)
// console.log(typeof num)

// ++++++++++++++++++++Memory++++++++++++++++++++++

// There are two typeof memories 
// -> Stack and Heap
//  Stack is primitive and heap is non-primitive

// let person = "Aman"

// let anothername = person

// anothername  = "Rekt"

// console.log(person) // op Aman
// console.log(anothername) //op Rekt
// This happens because the value of person given to "anothername" vairable is just a copy

// let user = {
//     email:"user@google.com",
//     upi:"user@ybl"
// } // this is the non primitive data type so this will go in heap

// let userZero = user;
// userZero.email = "2nd email"
// console.log(user.email); // 2nd email
// console.log(userZero.email); // 2nd email

//the variable is declared in stack but as the refernece is given the refernce os taken from
// the heap , thus not a copy but the original value 
