// const score = 400 
// console.log(score)
// // op :> 400

// const balance = new Number(100) // one way to declare the variable
// console.log(balance);
// // op :> [Number:100]

// console.log(balance.toString()); // this will change it to string 
// console.log(balance.toFixed(2)) // op :> 100.00

// const otherNUmber = 23.23423
// console.log(otherNUmber.toPrecision(3)) // the precision value would be  23.2 if it was 23.932 then it would have gone to 23.9

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) // if parameter not given in prototype then the valuse will be converted according to the US number system 
// // op :> 10,00,000
 
//   ************************************* MATHS *********************************

// console.log(Math.abs(-4)) // absolute value of the number , negative to positive
// console.log(Math.rond(4.6));
// console.log(Math.ceil(4.6)); // 5
// console.log(Math.floor(4.6)); // 4
// there are many prototype in the Math , just go to chrome and type in console "console.log(Math)"

console.log(Math.random()); // This will always be in some decimal i.e 0.928981569786093
console.log(floor(Math.random()*10) + 1); // we use this to avoid the 0 , and floor will round of the value


console.log(Math.floor(Math.random() * (max - min + 1)) + min)

