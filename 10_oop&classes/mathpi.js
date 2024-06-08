const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
// OP :{
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// these are the reasons the PI value can't be changed , and you can also use this for your objects as well such as writable, enumerable, configurable and such


// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI) // this won't change the value f constant object , but why ??

const user = {
    name: "aman",
    age : 21,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(user,"name")) 
// this will give the OP
// { value: 'aman', writable: true, enumerable: true, configurable: true } // can we change these properties ?? let's see this below

// Object.defineProperty(user,'name',{
// writable:false,
// enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(user,"name")) 

// op: {
//     value: 'aman',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

for (let [key,value] of Object.entries(user)) {
    if(typeof value !== "function"){
    console.log(`${key} : ${value}`)}  // this will thhrow error as the object is not iterable without Object.entries(user)
}

// this will work the way it is intended until we change the enumerable to false  and the name properties won't be iterable .
// mentioned in line 29.