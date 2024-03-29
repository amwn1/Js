// Immediately invoked function expression 

// to call a function Immediately , but dont use this defination in the interviews just wrap the function in parenthsis and end with parenthesis as well , for example :

(function chai(){
    console.log("Aman");

})(); // <- This semicolon is required.

// we use iife because to safeguard from global variables pollution .

(function aman(){
    console.log("Aman");

})(); // this wont work unless you place a  semicolon in the first IIFE function

// now how to give parameters  ?

((name) => {
    console.log(`Hey how are you ${name}`);

})('Aman Malik');