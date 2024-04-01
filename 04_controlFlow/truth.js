const email = "aman@gmail"
if(email){
    console.log(" Email Available");
}
else console.log("It isn't");

// This will give email available 

// but if you give , const email = "" , this will go to the else condition

// if there was an array say const email = [] , it is true and will show email available 

// WHY IS AN ARRAY TRUE BUT A STRING IS FALSE WHEN EMPTY ?

// There are some values which are truthy and falsy 

// falsy values :
// false ,0 , -0 , BigInt 0n , "" ,null , undefined ,NaN : other than this all are truthy values 
// for example :     
// "0", 'false'," ", [], {}, function () {}

// How to check if an object is empty or not ?

const empObject = {}

if(Object.keys(empObject).length == 0){ //this happens because the object.keys gives out an array of keys and if there are no objects in the array then it is an array of length 0
    console.log("Its empty")
}

// NOTE : INTERVIEW
// false == 0 //true
// false == ''//true
// 0 == '' //true

// Nullish Coalescing Operator (??): null,undefined
let val1 ;
val1 = 5 ?? 10 
console.log(val1); // will give 5 
// say from database , if for some reason a value is not able to come through then the value 10 will be assigned

let val2 ;
val2 = null ?? 10
console.log(val2); // op 10 
val2 = undefined ?? 10 // op 10 as well here

// now if val1 = null ?? 10 ?? 12 // basicaly which ever value will be assigned first

// TERNIARY OPERATOR

// condition ? true : false  

const price = 80 
price <= 70 ? console.log("More than 80") : console.log("Less than 80") // Less than 80 