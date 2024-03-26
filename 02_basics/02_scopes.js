// let a  = 10 
// const b = 20
// var c = 30 // we will study the differnce between them in regarding to block

// {} // curly braces are scopes 

// if(true){
// let a  = 10 
// const b = 20
// var c = 30
// }

// console.log(a) // This wont run
// console.log(b) // This wont run either
// console.log(c) // This will be declared !! Which is a huge problem , var c should no go out of scope

// var should be avoided as it does not adhere to scope protocols !

// Block scope 
// Global scope , should be studied 

// INT Q ) difference between scopes 
// INTV )  What are closures ? (You should know about DOM)

// NESTED SCOPES 

// function one(){
//     const name = "Aman" 

//     function two(){
//         const website = "Youtube" 
//         console.log(name)
//     }
//     console.log(website); // this will throw an error as it is out of the scope , the nested scope can retain value from the parent scope tho vice verca isnt true
//     two()                 // The above statement is closure but not the full concept
// }
// one() 

// +++++++++++++++++ interesting ++++++++++++++++++

// function addone(num){
//     return num +1 ;
// }

// console.log(addone(4)) // this will  work

// console.log(num) //error
// NOW!

console.log(addone(4))
function addone(num){
    return num +1 ;
} // this will run and it is okay , function is called before execution 



addTwo(3)
const addTwo = function(num){
    return num+2;
} // this won't run as we are also assigning a variable to it as well , this concept is called hoistin . This will be discussed further , if you wish you can search up it .
