const num = [1,2,3,4,5,6,7,8,9,10]

// say too add 10 to all the numbers in the array 
// Using Map

const numbers =  num.map((num) => num + 10)
// console.log(numbers);

// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

// Chaining 

// const newNum = num.map((i) => i * 10)
//                   .map((i)=> i + 1)


// console.log(newNum); 

// [
//     11, 21, 31, 41,  51,
//     61, 71, 81, 91, 101
//   ]


// const newNum = num.map((i) => i * 10)
//                   .map((i)=> i + 1)
//                   .filter((num) => num >= 40)

// console.log(newNum); 

// op [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]